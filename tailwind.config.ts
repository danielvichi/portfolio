import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          primary: "#13dbf2",
          secondary: "#15a7d3",
          tertiary: "#177e9e"
        },
        txt: {
          primary: "#edf6f9",
          secondary: "#c0d3e0",
          tertiary: "#8f9a9e",
        },
        background: {
          primary: "#1d1d26",
          secondary: "#181821",
        },
      },
    },
  },
} satisfies Config;
