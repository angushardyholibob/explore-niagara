"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@") || !email.includes(".")) {
      setStatus("error");
      return;
    }
    // In production, this would call an API endpoint
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 5000);
  }

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-[#0289c1] to-[#015f87]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Stay in the Loop
        </h2>
        <p className="text-white/75 mb-8 max-w-md mx-auto">
          Get exclusive deals, new tour announcements, and Niagara Falls travel
          tips delivered straight to your inbox.
        </p>

        {status === "success" ? (
          <div className="flex items-center justify-center gap-2 text-white bg-white/15 rounded-full px-6 py-4 max-w-lg mx-auto">
            <CheckCircle className="w-5 h-5 text-green-300" />
            <span className="text-sm font-medium">Thanks for subscribing! Check your inbox for a welcome email.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            noValidate
          >
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
                placeholder="Enter your email address"
                className={`w-full px-5 py-3.5 rounded-full text-sm bg-white/15 border text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 ${
                  status === "error" ? "border-red-400" : "border-white/25"
                }`}
                required
                aria-label="Email address"
                aria-invalid={status === "error"}
              />
              {status === "error" && (
                <div className="flex items-center gap-1 mt-2 text-red-300 text-xs">
                  <AlertCircle className="w-3.5 h-3.5" />
                  Please enter a valid email address
                </div>
              )}
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0289c1] font-semibold px-6 py-3.5 rounded-full text-sm hover:bg-gray-100 transition-colors"
            >
              Subscribe
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
