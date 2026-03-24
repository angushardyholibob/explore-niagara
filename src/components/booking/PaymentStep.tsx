"use client";

import { useState, useEffect } from "react";
import { CreditCard, Loader2, Lock } from "lucide-react";
import { fetchPaymentIntent, commitBooking } from "@/lib/holibob/client-api";
import { loadStripe, type Stripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

interface PaymentStepProps {
  bookingId: string;
  onComplete: (data: { code: string; state: string; voucherUrl?: string }) => void;
}

export default function PaymentStep({ bookingId, onComplete }: PaymentStepProps) {
  const [stripePromise, setStripePromise] = useState<Promise<Stripe | null> | null>(null);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [amount, setAmount] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const intent = await fetchPaymentIntent(bookingId);
        setStripePromise(loadStripe(intent.apiKey));
        setClientSecret(intent.clientSecret);

        const displayAmount =
          intent.amount / Math.pow(10, intent.currencyPrecision || 2);
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: intent.currency.toUpperCase(),
        }).format(displayAmount);
        setAmount(formatted);
      } catch (err) {
        console.error("Failed to load payment:", err);
        setError("Unable to initialize payment. Please try again.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [bookingId]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-gray-400">
        <Loader2 className="w-8 h-8 animate-spin mb-3" />
        <p>Preparing payment...</p>
      </div>
    );
  }

  if (error || !stripePromise || !clientSecret) {
    return (
      <div className="text-center py-16">
        <p className="text-red-500 mb-4">{error || "Payment initialization failed."}</p>
      </div>
    );
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <PaymentForm
        clientSecret={clientSecret}
        bookingId={bookingId}
        amount={amount}
        onComplete={onComplete}
      />
    </Elements>
  );
}

function PaymentForm({
  clientSecret,
  bookingId,
  amount,
  onComplete,
}: {
  clientSecret: string;
  bookingId: string;
  amount: string;
  onComplete: (data: { code: string; state: string; voucherUrl?: string }) => void;
}) {
  const stripe = useStripe();
  const elements = useElements();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!stripe || !elements) return;

    setSubmitting(true);
    setError(null);

    try {
      const cardElement = elements.getElement(CardElement);
      if (!cardElement) throw new Error("Card element not found");

      const { error: stripeError, paymentIntent } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: { card: cardElement },
        });

      if (stripeError) {
        setError(stripeError.message || "Payment failed.");
        setSubmitting(false);
        return;
      }

      if (
        paymentIntent?.status === "succeeded" ||
        paymentIntent?.status === "requires_capture"
      ) {
        // Commit booking after successful payment
        const result = await commitBooking(bookingId);
        onComplete(result);
      } else {
        setError("Payment was not completed. Please try again.");
      }
    } catch (err) {
      console.error("Payment error:", err);
      setError("Something went wrong with the payment.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center gap-2 mb-6">
        <CreditCard className="w-5 h-5 text-primary" />
        <h2 className="text-lg font-semibold text-dark">Payment</h2>
      </div>

      <div className="bg-gray-50 rounded-xl p-4 mb-6 flex items-center justify-between">
        <span className="text-sm text-gray-500">Total to pay</span>
        <span className="text-xl font-bold text-dark">{amount}</span>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-dark mb-2">
          Card details
        </label>
        <div className="p-4 border border-gray-200 rounded-xl bg-white">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  fontFamily: "Poppins, sans-serif",
                  color: "#212222",
                  "::placeholder": { color: "#9ca3af" },
                },
                invalid: { color: "#ef4444" },
              },
            }}
          />
        </div>
      </div>

      {error && <p className="text-sm text-red-500 mb-4">{error}</p>}

      <button
        type="submit"
        disabled={!stripe || submitting}
        className="w-full py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors disabled:opacity-50"
      >
        {submitting ? "Processing..." : `Pay ${amount}`}
      </button>

      <div className="flex items-center justify-center gap-1.5 mt-4 text-xs text-gray-400">
        <Lock className="w-3.5 h-3.5" />
        <span>Secured by Stripe. Your card details are encrypted.</span>
      </div>
    </form>
  );
}
