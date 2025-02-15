import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-current": "curentColor",
        "color-transparent": "transparent",
        "color-white": "#FFFFFF",
        "color-black": "#000000",
        "color-grey": {
          1: "#E5E5E5",
          2: "#A09F9F1A",
          3: "#F3F3F3",
          4: "#F0EEED",
          5: "#BEBEBE",
        },
        "color-red": {
          1: "#FF3333",
          2: "#FF33331A",
        },
      },
      fontFamily: {
        satoshi: "var(--font-satoshi)",
        monserrat: "var(--font-monserrat)",
      },
    },
  },
  plugins: [],
} satisfies Config;
