/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      playfair: ["Playfair Display", "serif"],
      lato: ["Lato", "sans-serif"],
    },
    extend: {
      boxShadow: {
        xl: "0 8px 16px rgba(0, 0, 0, 0.075)",
        "2xl": "0 16px 32px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
