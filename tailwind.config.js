/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    backgroundImage: {
        'custom-bg': "url('https://worldmark.wyndhamdestinations.com/content/dam/wyndham/wyndham-vacation-clubs/worldmark/resorts/news/latest-news/wbw-news-articles-2021-new-website-1990x810.jpg')",
      },
  },
  plugins: [],
}