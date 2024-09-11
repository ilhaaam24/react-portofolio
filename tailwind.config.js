/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        rotate: "rotate 0.5s ease ",
      },

      keyframes: {
        rotate: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(180deg)",
          },
        },
      },
    },
    plugins: [],
  },
};
