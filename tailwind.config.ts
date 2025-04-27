import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "5xl": { max: "2200px" },
      // => @media (max-width: 2200px) { ... }
      "4xl": { max: "2000px" },
      // => @media (max-width: 2000px) { ... }
      "3xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
      "2xl": { max: "1350px" },
      // => @media (max-width: 1535px) { ... }
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
      sxl: { max: "1200px" },
      // => @media (max-width: 1200px) { ... }
      xlg: { max: "1150px" },
      // => @media (max-width: 1150px) { ... }
      lg: { max: "1024px" },
      // => @media (max-width: 1024px) { ... }
      xmd: { max: "950px" },
      // => @media (max-width: 950px) { ... }
      md: { max: "850px" },
      // => @media (max-width: 850px) { ... }
      smd: { max: "750px" },
      // => @media (max-width: 750px) { ... }
      sm: { max: "650px" },
      // => @media (max-width: 650px) { ... }
      ssm: { max: "500px" },
      // => @media (max-width: 500px) { ... }
      sssm: { max: "400px" },
      // => @media (max-width: 400px) { ... }
      vssm: { max: "350px" },
      // => @media (max-width: 350px) { ... }
      sh: { raw: "(max-height: 900px)" },
      // => @media (max-width: 750px) { ... }
      ssh: { raw: "(max-height: 750px)" },
    },
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
