/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // You can define custom "NCC Blue" or branding colors here
        brand: {
          light: '#3b82f6',
          dark: '#1e40af',
        }
      },
    },
  },
  plugins: [],
}