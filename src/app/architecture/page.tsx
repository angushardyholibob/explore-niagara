import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Architecture",
  robots: { index: false, follow: false },
};

export default function ArchitecturePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] py-8 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Site Architecture
        </h1>
        <p className="text-slate-400 text-sm">
          Live reference diagram — update{" "}
          <code className="bg-slate-700/50 px-1.5 py-0.5 rounded text-xs text-slate-300">
            docs/architecture-diagram.html
          </code>{" "}
          to keep this current
        </p>
      </div>
      <iframe
        src="/architecture-diagram.html"
        className="flex-1 w-full border-0"
        style={{ minHeight: "calc(100vh - 200px)" }}
        title="Architecture Diagram"
      />
    </div>
  );
}
