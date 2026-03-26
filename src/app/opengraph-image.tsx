import { ImageResponse } from "next/og";
import { getDestinationSync } from "@/config/destination";

const config = getDestinationSync();

export const runtime = "edge";
export const alt = `${config.brandName} — Best Tours & Attractions in ${config.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a3d5c 0%, #0b6b96 50%, #0289c1 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.1,
              marginBottom: "24px",
              maxWidth: "900px",
            }}
          >
            {config.brandName}
          </div>
          <div
            style={{
              fontSize: "32px",
              color: "rgba(255,255,255,0.8)",
              maxWidth: "700px",
              lineHeight: 1.4,
            }}
          >
            The best tours & attractions in {config.name}
          </div>
          <div
            style={{
              marginTop: "40px",
              fontSize: "18px",
              color: "rgba(255,255,255,0.6)",
              background: "rgba(255,255,255,0.15)",
              padding: "12px 32px",
              borderRadius: "50px",
            }}
          >
            {config.domain}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
