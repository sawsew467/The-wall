/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "spin1": "10s linear 0s infinite normal none running rotatePlay",
      },
    },
  },
  plugins: [],
};
