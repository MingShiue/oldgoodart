/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",              // 你的首頁
    //"./src/**/*.{js,ts,jsx,tsx}"  如果有用 Vite/React 等
  ],
  theme: {
    extend: {
      colors: {
        brand: "#F8F900",   // 例：品牌色（粉紅紅）
      },
      fontFamily: {
        sans: ["LINE Seed", "sans-serif"], // 基本文字
      },
    },
  },
  plugins: [],
}