import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: "14px",
        sm: "16px",
        md: "18px",
        lg: "20px",
        xl: "24px",
        xxl: "32px",
      },
      fontFamily: {
        title: ["var(--font-alegreya)"],
        body: ["var(--font-mulish)"],
      },
    },
  },
};
export default config;
