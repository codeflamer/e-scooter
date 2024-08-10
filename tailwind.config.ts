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
        base: "#6F73EE",
        "base-black": "#282739",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "radial-gradient": "radial-gradient(circle, #595959, #3B3E46)",
        "radial-base": "radial-gradient(circle, #6F73EE, #6F73EE)",
        "radial-banner": "radial-gradient(circle, #A6A9FF,#6F73EE)",
      },
    },
  },
  plugins: [],
};
export default config;
