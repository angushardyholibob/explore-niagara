import { ShieldCheck, Zap, RefreshCw, Headphones } from "lucide-react";

export default function WhyBookSection() {
  const reasons = [
    {
      icon: Zap,
      title: "Instant Confirmation",
      desc: "Book online and receive your e-tickets immediately. No waiting, no phone calls.",
    },
    {
      icon: RefreshCw,
      title: "Free Cancellation",
      desc: "Plans change. Most tours offer free cancellation up to 24 hours before your experience.",
    },
    {
      icon: ShieldCheck,
      title: "Verified Operators",
      desc: "Every tour operator is vetted for safety, quality, and reliability. Book with confidence.",
    },
    {
      icon: Headphones,
      title: "Local Support",
      desc: "Our Niagara-based team is here to help. Reach us at info@exploreniagara.com.",
    },
  ];

  return (
    <section className="bg-[#1a2332] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Why Book With Explore Niagara
          </h2>
          <p className="text-white/60 max-w-md mx-auto">
            We&apos;re not just another booking site. Here&apos;s what makes us different.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="text-center">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                <r.icon className="w-6 h-6 text-[#0289c1]" />
              </div>
              <h3 className="text-white font-semibold mb-2">{r.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
