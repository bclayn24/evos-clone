/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      boxShadow: {
        header: "inset 0 -1px 0 #e5e5e5;",
      },
      fontWeight: {
        550: "550",
      },
    },
  },
  plugins: [],
};
