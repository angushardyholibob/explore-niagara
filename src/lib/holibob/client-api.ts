/**
 * Client-side API functions — call our /api/graphql proxy route.
 * Used by client components (booking flow) where server-side calls aren't possible.
 */
import * as Q from "./queries";
import type {
  AvailabilityDate,
  AvailabilityOption,
  PricingCategory,
  Booking,
  BookingQuestion,
  PaymentIntent,
} from "./types";

async function gql<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const res = await fetch("/api/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();

  if (json.errors) {
    throw new Error(json.errors[0]?.message || "GraphQL error");
  }

  return json.data as T;
}

// ─── Step 1: Availability List ───

export async function fetchAvailabilityList(
  productId: string,
  sessionId?: string,
  optionList?: { id: string; value: string }[]
) {
  const variables: Record<string, unknown> = { productId };
  if (sessionId) variables.sessionId = sessionId;
  if (optionList) variables.optionList = optionList;

  const data = await gql<{ availabilityList: Record<string, unknown> }>(
    Q.AVAILABILITY_LIST,
    variables
  );

  const al = data.availabilityList;
  return {
    sessionId: al.sessionId as string,
    availabilities: ((al.nodes as AvailabilityDate[]) || []),
    options: ((al.optionList as { nodes: AvailabilityOption[] })?.nodes || []),
  };
}

// ─── Step 2: Availability Options ───

export async function fetchAvailabilityOptions(
  availabilityId: string,
  optionAnswers?: { id: string; value: string }[]
) {
  const variables: Record<string, unknown> = { availabilityId };
  if (optionAnswers) {
    variables.input = { optionList: optionAnswers };
  }

  const data = await gql<{ availability: Record<string, unknown> }>(
    Q.AVAILABILITY_OPTIONS,
    variables
  );

  const a = data.availability;
  const optionList = a.optionList as { isComplete: boolean; nodes: AvailabilityOption[] };
  return {
    isComplete: optionList.isComplete,
    options: optionList.nodes || [],
  };
}

// ─── Step 3: Pricing ───

export async function fetchAvailabilityPricing(
  availabilityId: string,
  pricingCategoryList?: { id: string; units: number }[]
) {
  const variables: Record<string, unknown> = { availabilityId };
  if (pricingCategoryList) {
    variables.input = { pricingCategoryList };
  }

  const data = await gql<{ availability: Record<string, unknown> }>(
    Q.AVAILABILITY_PRICING,
    variables
  );

  const a = data.availability;
  return {
    isValid: a.isValid as boolean,
    minParticipants: a.minParticipants as number,
    maxParticipants: a.maxParticipants as number,
    totalPrice: a.totalPrice as { grossFormattedText: string; gross: number },
    categories: ((a.pricingCategoryList as { nodes: PricingCategory[] })?.nodes || []),
  };
}

// ─── Step 4: Create Booking ───

export async function createBooking(): Promise<Booking> {
  const data = await gql<{ bookingCreate: Booking }>(Q.BOOKING_CREATE, {
    input: { autoFillQuestions: true },
  });
  return data.bookingCreate;
}

// ─── Step 5: Add Availability to Booking ───

export async function addAvailabilityToBooking(
  bookingId: string,
  availabilityId: string
) {
  const data = await gql<{ bookingAddAvailability: { isComplete: boolean } }>(
    Q.BOOKING_ADD_AVAILABILITY,
    { input: { bookingSelector: { id: bookingId }, id: availabilityId } }
  );
  return data.bookingAddAvailability;
}

// ─── Step 6: Booking Questions ───

export async function fetchBookingQuestions(
  bookingId: string,
  input?: { leadPassengerName?: string; answerList?: { questionId: string; value: string }[] }
) {
  const variables: Record<string, unknown> = { bookingId };
  if (input) variables.input = input;

  const data = await gql<{ booking: Record<string, unknown> }>(Q.BOOKING_QUESTIONS, variables);
  const bk = data.booking as Record<string, unknown>;

  // Collect questions from all 3 levels
  const allQuestions: BookingQuestion[] = [];

  const bookingQs = (bk.questionList as { nodes: BookingQuestion[] })?.nodes || [];
  bookingQs.forEach((q) => allQuestions.push({ ...q, level: "booking" }));

  const avails = (bk.availabilityList as { nodes: Record<string, unknown>[] })?.nodes || [];
  avails.forEach((a) => {
    const aqs = (a.questionList as { nodes: BookingQuestion[] })?.nodes || [];
    aqs.forEach((q) => allQuestions.push({ ...q, level: "availability", availId: a.id as string }));

    const persons = (a.personList as { nodes: Record<string, unknown>[] })?.nodes || [];
    persons.forEach((p) => {
      const pqs = (p.questionList as { nodes: BookingQuestion[] })?.nodes || [];
      pqs.forEach((q) =>
        allQuestions.push({
          ...q,
          level: "person",
          personId: p.id as string,
          personLabel: p.pricingCategoryLabel as string,
        })
      );
    });
  });

  return {
    booking: bk as unknown as Booking,
    questions: allQuestions,
  };
}

// ─── Step 7: Commit Booking ───

export async function commitBooking(bookingId: string) {
  const data = await gql<{ bookingCommit: { code: string; state: string; voucherUrl: string } }>(
    Q.BOOKING_COMMIT,
    { bookingSelector: { id: bookingId } }
  );
  return data.bookingCommit;
}

// ─── Booking Status ───

export async function fetchBookingStatus(bookingId: string) {
  const data = await gql<{
    booking: { id: string; code: string; state: string; voucherUrl: string };
  }>(Q.BOOKING_STATUS, { bookingId });
  return data.booking;
}

export async function pollBookingUntilConfirmed(
  bookingId: string,
  maxRetries = 8,
  intervalMs = 3000
) {
  for (let i = 0; i < maxRetries; i++) {
    await new Promise((resolve) => setTimeout(resolve, intervalMs));
    const status = await fetchBookingStatus(bookingId);
    if (status?.state === "CONFIRMED" || status?.state === "CANCELLED" || status?.state === "FAILED") {
      return status;
    }
  }
  return fetchBookingStatus(bookingId);
}

// ─── Payment Intent ───

export async function fetchPaymentIntent(bookingId: string): Promise<PaymentIntent> {
  const data = await gql<{ paymentIntent: PaymentIntent }>(Q.PAYMENT_INTENT, {
    bookingSelector: { id: bookingId },
  });
  return data.paymentIntent;
}
