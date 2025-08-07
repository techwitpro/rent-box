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
        black: "#112618",
        green: "#20492E",
        "light-green": "#BAF915",
      },
      fontFamily: {
        'sans': ['"Schibsted Grotesk"', 'sans-serif'],
        'schibsted': ['"Schibsted Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config; 