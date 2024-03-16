/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: { min: "320px", max: "767px" },
      // => @media screen and (width >= 320px) and (width <= 767px)
      md: { min: "768px", max: "884px" },
      // => @media screen and (width >= 768px) and (width <= 1024px)
      xl: { min: "1024px", max: "2560px" },
    },
  },
  plugins: [],
};
