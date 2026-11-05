import { ImageResponse } from "next/og";

// Default social share card (WhatsApp, LinkedIn, X, Facebook) for every page.
// A route can override it by adding its own opengraph-image.tsx/.png.

export const alt = "Baagul — Digital growth studio in Bengaluru";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FEF9ED",
          padding: "64px 72px",
          border: "16px solid #0E1153",
          color: "#0E1153",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 22, height: 22, background: "#FFBA45", border: "3px solid #0E1153" }} />
          <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: 6 }}>BAAGUL.IN</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, display: "flex", flexWrap: "wrap" }}>
            Digital growth,&nbsp;
            <span
              style={{
                background: "#FFBA45",
                border: "4px solid #0E1153",
                boxShadow: "8px 8px 0 #0E1153",
                padding: "0 18px",
                borderRadius: 10,
              }}
            >
              made in Bengaluru
            </span>
          </div>
          <div style={{ fontSize: 30, color: "#121A4A", opacity: 0.8 }}>
            Web Design · SEO · Branding · Paid Media · Video Editing
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, fontWeight: 700 }}>
          <span style={{ color: "#0E7A63" }}>www.baagul.in</span>
          <span>HSR Layout, Bengaluru</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
