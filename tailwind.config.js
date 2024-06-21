const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        "neutral-black": "#263238",
        "neutral-d-grey": "#4D4D4D",
        "neutral-grey": "#717171",
        "neutral-l-grey": "#89939E",
        "neutral-grey-blue": "#ABBED1",
        "neutral-silver": "#F5F7FA",
        "neutral-white": "#FFFFFF",
        "brand-primary": "#28CB8B",
        "brand-secondary": "#263238",
        "brand-info": "#263238",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
