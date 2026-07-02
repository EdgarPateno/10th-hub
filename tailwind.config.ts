import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Ground
        navy: {
          DEFAULT: "#0E1B2E",
          800: "#13263E",
          700: "#1B324F",
          600: "#274063",
        },
        // Employer audience = blue
        brand: {
          DEFAULT: "#2557E6",
          600: "#1E49C8",
          700: "#1A3EA8",
          50: "#EEF3FF",
          100: "#DCE6FF",
        },
        // Talent / VA audience = coral
        talent: {
          DEFAULT: "#FB6B4B",
          600: "#EE532F",
          700: "#CC3F1F",
          50: "#FFF1EC",
          100: "#FFE0D5",
        },
        ink: "#0B1220",
        slate: {
          body: "#334155",
          muted: "#5A6B84",
        },
        line: "#E3E8F0",
        canvas: "#F7F9FC",
        verified: "#16A34A",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(14,27,46,0.04), 0 8px 24px rgba(14,27,46,0.06)",
        cardHover: "0 2px 4px rgba(14,27,46,0.06), 0 16px 40px rgba(14,27,46,0.12)",
        focus: "0 0 0 3px rgba(37,87,230,0.35)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "dash": {
          to: { strokeDashoffset: "0" },
        },
        "pulse-node": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "pulse-node": "pulse-node 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
