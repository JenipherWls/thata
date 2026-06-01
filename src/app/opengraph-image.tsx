import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.title;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "linear-gradient(135deg, #390517 0%, #03110D 55%, #12060A 100%)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 66,
              letterSpacing: 2,
              fontWeight: 700,
              color: "#F8F8F8",
              lineHeight: 1.05,
            }}
          >
            {siteConfig.name.toUpperCase()}
          </div>
          <div
            style={{
              fontSize: 26,
              color: "rgba(248,248,248,0.82)",
              lineHeight: 1.35,
            }}
          >
            {siteConfig.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
            padding: 22,
            borderRadius: 28,
            border: "1px solid rgba(248,248,248,0.18)",
            background: "rgba(248,248,248,0.08)",
          }}
        >
          <div
            style={{
              fontSize: 24,
              color: "rgba(248,248,248,0.86)",
              lineHeight: 1.35,
              maxWidth: 860,
            }}
          >
            {siteConfig.description}
          </div>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              background: "#C8A46A",
              boxShadow: "0 0 0 14px rgba(200,164,106,0.16)",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
