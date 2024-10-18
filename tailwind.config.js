/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#04171A",
        tertiary: "#2ECC71",
        dark: {
          400: "#D3CFC6",
          900: "#041314",
        },
      },
    },
  },
  plugins: [],
};
