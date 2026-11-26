import { ImageResponse } from "next/og";
import { locales } from "@/i18n/config";

export const alt = "Denwebs — Shopify agency for commerce & AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#10141a",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 30,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#5b8cff",
            }}
          >
            Denwebs
          </div>
          <div
            style={{
              marginTop: 32,
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#f6f5f1",
              letterSpacing: "-0.02em",
              maxWidth: 900,
            }}
          >
            Shopify commerce that works as a system.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "rgba(246,245,241,0.6)",
            fontSize: 26,
          }}
        >
          <span>Strategy → AI. One agency.</span>
          <span style={{ color: "#5b8cff" }}>denwebs.com</span>
        </div>
      </div>
    ),
    size
  );
}
