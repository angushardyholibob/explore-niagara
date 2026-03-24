"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setEmail("");
          }}
          className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-5 py-3.5 rounded-full text-sm bg-white/15 border border-white/25 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40"
            required
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#0289c1] font-semibold px-6 py-3.5 rounded-full text-sm hover:bg-gray-100 transition-colors"
          >
            Subscribe
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
