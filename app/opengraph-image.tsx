import { ImageResponse } from "next/og";

export const alt = "Sustainabyte Technologies - AI Energy Management India";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0D1B3E 0%, #1A2D5A 50%, #0D1B3E 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(61,214,140,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(77,184,70,0.1) 0%, transparent 70%)",
          }}
        />

        {/* Logo area */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 16,
              background: "linear-gradient(135deg, #4DB846, #3DD68C)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 800,
              color: "#fff",
            }}
          >
            S
          </div>
          <div style={{ fontSize: 36, fontWeight: 700, color: "#fff" }}>
            Sustainabyte
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 52,
            fontWeight: 800,
            color: "#fff",
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.2,
            marginBottom: 24,
          }}
        >
          AI-Powered Energy Intelligence
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 500,
            background: "linear-gradient(90deg, #4DB846, #3DD68C)",
            backgroundClip: "text",
            color: "transparent",
            textAlign: "center",
          }}
        >
          for Buildings & Industries
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            gap: 20,
            marginTop: 40,
            fontSize: 18,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          <span>AI</span>
          <span>·</span>
          <span>IoT</span>
          <span>·</span>
          <span>Net Zero</span>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #4DB846, #3DD68C, #4DB846)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
