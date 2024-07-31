/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'DM': ["DM Sans", "sans-serif"],
    },
    extend: {
      colors: {
        "t-primary-active": "#262626",
        "t-primary": "#767676",
      },
    },
    
  },
  plugins: [],
};
