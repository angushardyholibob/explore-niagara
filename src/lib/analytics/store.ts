import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data", "analytics");
const EVENTS_FILE = path.join(DATA_DIR, "events.json");

export interface AnalyticsEvent {
  id: string;
  type: "page_view" | "booking_start" | "booking_complete" | "tour_click" | "search";
  timestamp: string;
  path: string;
  referrer: string;
  userAgent: string;
  sessionId: string;
  meta?: Record<string, string>;
}

function ensureDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

export function readEvents(): AnalyticsEvent[] {
  ensureDir();
  if (!fs.existsSync(EVENTS_FILE)) return [];
  try {
    return JSON.parse(fs.readFileSync(EVENTS_FILE, "utf-8"));
  } catch {
    return [];
  }
}

export function writeEvent(event: AnalyticsEvent) {
  ensureDir();
  const events = readEvents();
  events.push(event);
  // Keep last 50k events max
  const trimmed = events.length > 50000 ? events.slice(-50000) : events;
  fs.writeFileSync(EVENTS_FILE, JSON.stringify(trimmed));
}

export function clearEvents() {
  ensureDir();
  fs.writeFileSync(EVENTS_FILE, "[]");
}
