import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F7F7F3",
        foreground: "#111111",
        surface: {
          light: "#FFFFFF",
          subtle: "#F2F2EC",
          card: "#FFFFFF",
          glass: "rgba(255, 255, 255, 0.65)",
          glassDark: "rgba(18, 20, 24, 0.75)",
        },
        brand: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          400: "#34D399",
          500: "#10B981",
          600: "#059669",
          700: "#047857",
          dark: "#064E3B",
          accent: "#00C389",
        },
        accent: {
          emerald: "#10B981",
          electric: "#00E599",
          cyan: "#06B6D4",
          blue: "#2563EB",
          slate: "#475569",
        },
        slateText: {
          primary: "#111111",
          secondary: "#6F706B",
          muted: "#989993",
          light: "#E5E5DE",
        },
        darkSection: {
          bg: "#0D0F11",
          card: "#14171A",
          border: "rgba(255, 255, 255, 0.08)",
          text: "#F7F7F3",
          muted: "#8C929D",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        fine: "0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 3px 1px rgba(0, 0, 0, 0.02)",
        soft: "0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.02)",
        card: "0 10px 30px -4px rgba(0, 0, 0, 0.06), 0 4px 12px -2px rgba(0, 0, 0, 0.03)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.06)",
        glow: "0 0 35px -5px rgba(16, 185, 129, 0.25)",
        glowLarge: "0 0 70px -10px rgba(16, 185, 129, 0.3)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-reverse": "floatReverse 9s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 4s ease-in-out infinite",
        "spin-slow": "spin 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(10px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
