/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navbarTest: "var(--navbar)", // Use DaisyUI variable
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#98002e",
          secondary: "#f000b8",
          accent: "#1dcdbc",
          neutral: "#f5f5f5",
          "base-100": "#ffffff",
          navbar: "#f0f4f8", // Light navbar color
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
        dark: {
          primary: "#98002e",
          secondary: "#f000b8",
          accent: "#1dcdbc",
          neutral: "#2a2e37",
          "base-100": "#1a1a1a",
          navbar: "#1a202c", // Dark navbar color
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
    ],
  },
};
