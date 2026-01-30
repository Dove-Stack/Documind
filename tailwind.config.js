import iconify from "@iconify/tailwind4";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  plugins: [iconify()],

  safelist: [
    {
      pattern: /icon-\[.*?\]/,
    },
  ],
};
