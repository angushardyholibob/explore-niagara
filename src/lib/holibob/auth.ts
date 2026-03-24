import crypto from "crypto";

/**
 * Generate HMAC-SHA1 signature for Holibob API authentication.
 * Canonical string: Date + API-key + Method + Path + Body (no separators)
 */
export function generateHolibobAuthHeaders(
  body: string,
  apiKey: string,
  apiSecret: string
) {
  const date = new Date().toISOString();
  const method = "POST";
  const path = "/graphql";

  const canonical = `${date}${apiKey}${method}${path}${body}`;

  const signature = crypto
    .createHmac("sha1", apiSecret)
    .update(canonical)
    .digest("base64");

  return {
    "Content-Type": "application/json",
    "X-API-Key": apiKey,
    "X-Holibob-Date": date,
    "X-Holibob-Signature": signature,
  };
}
