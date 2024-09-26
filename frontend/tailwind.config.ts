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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "deep-ocean": {
          "50": "#f1f2ff",
          "100": "#e5e5ff",
          "200": "#cecfff",
          "300": "#a7a7ff",
          "400": "#7d76ff",
          "500": "#533fff",
          "600": "#3d18ff",
          "700": "#2d07fa",
          "800": "#2505d2",
          "900": "#2006ac",
          "950": "#11008f",
        },
      },
    },
  },
  plugins: [],
};
export default config;
