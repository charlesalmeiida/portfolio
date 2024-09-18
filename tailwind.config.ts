import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll: "scroll 15s linear infinite",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        inter: ["var(--font-inter)"],
      },
      dropShadow: {
        lg: "0px 9px 129.8px rgba(0, 0, 0, 0.10)",
      },
      colors: {
        blue: "#1F4287",
        blue02: "#071E3D",
        blue03: "#2C4D8E",
        gray03: "#212529",
        gray02: "#ADB5BD",
        gray01: "#F8F9FA",
      },
    },
  },
  plugins: [],
}
export default config
