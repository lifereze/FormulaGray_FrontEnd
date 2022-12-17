/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#14002A",
        formblue: "#00E5FF",
        midnight: "#14002A",
        "midnight-light": "#211842",
        formgreen: "#00FFDC",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
