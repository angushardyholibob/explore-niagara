import type { DestinationConfig } from "./types";

// Lazy-load destination configs to avoid bundling all three
const configs: Record<string, () => Promise<{ default: DestinationConfig }>> = {
  niagara: () => import("./destinations/niagara"),
  tokyo: () => import("./destinations/tokyo"),
  queenstown: () => import("./destinations/queenstown"),
  wellington: () => import("./destinations/wellington"),
  edinburgh: () => import("./destinations/edinburgh"),
};

// Detect destination from env var — defaults to "niagara"
export const DESTINATION_SLUG =
  process.env.NEXT_PUBLIC_DESTINATION || "niagara";

// Synchronous config for server components (loaded at module level)
let _config: DestinationConfig | null = null;

export function getDestinationSync(): DestinationConfig {
  if (_config) return _config;
  // Fallback: require synchronously (works in Node.js / server components)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const mod = require(`./destinations/${DESTINATION_SLUG}`);
  _config = mod.default;
  return _config!;
}

// Async config loader (for dynamic imports if needed)
export async function getDestination(): Promise<DestinationConfig> {
  if (_config) return _config;
  const loader = configs[DESTINATION_SLUG];
  if (!loader) throw new Error(`Unknown destination: ${DESTINATION_SLUG}`);
  const mod = await loader();
  _config = mod.default;
  return _config;
}

// Re-export for convenience
export type { DestinationConfig };
