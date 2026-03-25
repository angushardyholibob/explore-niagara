"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

function getSessionId(): string {
  if (typeof window === "undefined") return "";
  let id = sessionStorage.getItem("_sid");
  if (!id) {
    id = Math.random().toString(36).slice(2) + Date.now().toString(36);
    sessionStorage.setItem("_sid", id);
  }
  return id;
}

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const prevPath = useRef("");

  useEffect(() => {
    if (pathname === prevPath.current) return;
    prevPath.current = pathname;

    // Skip admin pages
    if (pathname.startsWith("/admin")) return;

    const sessionId = getSessionId();
    fetch("/api/analytics", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "page_view",
        path: pathname,
        referrer: document.referrer,
        sessionId,
      }),
    }).catch(() => {
      // Silently fail — analytics should never break the site
    });
  }, [pathname]);

  return null;
}

/** Call this to track custom events (booking_start, booking_complete, etc.) */
export function trackEvent(
  type: string,
  path: string,
  meta?: Record<string, string>
) {
  const sessionId =
    typeof window !== "undefined"
      ? sessionStorage.getItem("_sid") || ""
      : "";

  fetch("/api/analytics", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type, path, referrer: "", sessionId, meta }),
  }).catch(() => {});
}
