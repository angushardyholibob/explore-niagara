import { ShieldCheck, Zap, CalendarX2 } from "lucide-react";

const usps = [
  {
    icon: CalendarX2,
    title: "Flexible Cancellation",
    description:
      "Plans change — we get it. Enjoy free cancellation on most experiences up to 24 hours before your tour.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Suppliers",
    description:
      "We partner only with the top-rated, locally vetted operators to ensure a safe and memorable experience.",
  },
  {
    icon: Zap,
    title: "Instant Confirmation",
    description:
      "Book with confidence. Receive instant confirmation and e-tickets directly to your inbox.",
  },
];

export default function USPSection() {
  return (
    <section className="bg-[#0289c1] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {usps.map((usp) => (
            <div key={usp.title} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 mb-5">
                <usp.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {usp.title}
              </h3>
              <p className="text-white/75 text-sm leading-relaxed max-w-xs mx-auto">
                {usp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
