/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        regular: ['Gilroy-Regular'],
        bold: ['Gilroy-Bold'],
        heavy: ['Gilroy-Heavy'],
        medium: ['Gilroy-Medium']
      },
      colors: {
        'darkgreen': "#133009"
      },
      backgroundImage: {
        'about1': "url('/public/images/about1.webp')",
        'about2': "url('/images/about2.webp')",
        'about3': "url('/images/about3.webp')",
        'about4': "url('/images/about4.webp')",
      },
    },
  },
  plugins: [],
}