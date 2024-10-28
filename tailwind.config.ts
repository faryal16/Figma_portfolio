import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        ss:"360px",
        sm: "640px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
      },
      contanier: {
        center: true,
        padding: "20px",
      },
    },
    
  },
  plugins: [],
};
export default config;
