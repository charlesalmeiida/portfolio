import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
        gray03: "#212529",
        gray02: "#ADB5BD",
        gray01: "#F8F9FA",
      },
    },
  },
  plugins: [],
}
export default config
