import type { Config } from "tailwindcss";

/**
 * DARK BLUE THEME.
 *
 * The whole site sits on one deep royal-blue ground (`canvas`), so these are
 * SEMANTIC tokens, not literal ones: `ink` is "the strongest text colour",
 * not "black"; `line` is "a hairline", not "light grey". Components reference
 * the semantic name, which is why flipping light -> dark happens here instead
 * of across 200 utility classes in 29 files.
 *
 * Every foreground below was checked against the ground (#063787) and against
 * the frosted card surface (~#0C4291) for WCAG AA. See the note on each token.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // ---- Ground -------------------------------------------------------
        // The page base. Sampled from the reference art direction: a deep
        // royal blue that the ambient blooms lift toward #0E4390 in the
        // middle and vignette down toward #02214F at the edges.
        canvas: "#063787",

        // Darker-than-ground band. Used by `.mesh-navy` (CTA band, footer,
        // scarcity bar) so those read as RECESSED against the ground now that
        // the ground itself is blue. Under a light theme this was the only
        // dark surface; now it is the darkest of several.
        navy: {
          DEFAULT: "#021A44",
          800: "#032357",
          700: "#053473",
          600: "#0A4696",
        },

        // ---- Brand blue ---------------------------------------------------
        // NOTE the inverted scale. On a dark ground the DEFAULT has to be the
        // *bright* value, because `text-brand` (30+ usages) must read against
        // the blue. No single blue can be both legible as text on #063787
        // (needs luminance >= 0.29) and hold white text as a button fill
        // (needs <= 0.18) — those ranges do not overlap. So solid fills use
        // `action` below instead, and `brand` is purely a foreground accent.
        brand: {
          DEFAULT: "#8FBBFF", // 5.6:1 on ground — links, accents, icons
          600: "#B3D2FF", // accent hover (lighter, not darker)
          700: "#5B93F0", // accent pressed
          50: "#10469C", // dark chip fill; `text-brand` on it = 4.5:1
          100: "#D2E2FF", // light text on the navy meshes — 13:1
        },

        // Solid interactive fill. Deep enough to carry white text (5.7:1),
        // bright enough to read as the primary action on the blue ground.
        action: {
          DEFAULT: "#1C5FD6",
          hover: "#2C71EA",
          ring: "#7DB0FF",
        },

        // ---- Talent / coral accent ---------------------------------------
        // White on coral is 2.3:1 at any usable coral, so the solid `talent`
        // button puts NAVY text on the fill (6.2:1) rather than white.
        talent: {
          DEFAULT: "#FF9B7E", // 5.4:1 on ground
          600: "#FFA189",
          700: "#FFB49F",
          50: "#5A2314", // dark chip fill
          100: "#FFD8CB",
        },

        // ---- Atmosphere ---------------------------------------------------
        // Was the light-blue field. Now the low-lift surfaces that sit just
        // above the ground: nav hover, subtle wells. 200 is a hairline.
        azure: {
          50: "#072F6E",
          100: "#0D3C87",
          200: "rgba(255,255,255,0.14)",
          300: "#5E8FD6",
          400: "#89B2EF",
        },

        // ---- Foreground ---------------------------------------------------
        ink: "#F4F8FF", // headings — 10.4:1 on ground
        slate: {
          body: "#C6D6F5", // body copy — 7.5:1
          muted: "#A8BEE6", // secondary/meta — 5.9:1
        },
        line: "rgba(255,255,255,0.13)", // hairline on any blue surface
        verified: "#4ADFA9", // 6.5:1 (the old #16A34A was 4.1:1 here)
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
        // Shadows are near-black on a dark ground; the "lift" now comes from
        // the border highlight in `.glass`, not from a soft grey drop.
        card: "0 1px 2px rgba(0,0,0,0.20), 0 8px 24px rgba(0,0,0,0.24)",
        cardHover: "0 2px 4px rgba(0,0,0,0.24), 0 18px 44px rgba(0,0,0,0.34)",
        focus: "0 0 0 3px rgba(125,176,255,0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        dash: {
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
