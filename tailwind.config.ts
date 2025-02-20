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
      boxShadow: {
        custom: "0px 5px 16px 0px rgba(8, 15, 52, 0.06)",
        "custom-2": "0px 5px 16px 0px rgba(8, 15, 52, 0.06)",
        "custom-3": "0px 6px 16px 0px rgba(132, 132, 132, 0.25)",
      },
    },
  },
  plugins: [],
} satisfies Config;
