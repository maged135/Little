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
      'custm-bm': "url('https://png.pngtree.com/thumb_back/fh260/background/20220825/pngtree-asian-man-sitting-on-couch-with-laptop-man-using-laptop-photo-image_38748204.jpg')",
      'custm-bb': "url('https://tse1.mm.bing.net/th/id/OIP.E3FEDWe8tq7OKxdYdCcexAHaE8?cb=thfc1&rs=1&pid=ImgDetMain&o=7&rm=3')",
      'custom-bg': "url('https://worldmark.wyndhamdestinations.com/content/dam/wyndham/wyndham-vacation-clubs/worldmark/resorts/news/latest-news/wbw-news-articles-2021-new-website-1990x810.jpg')",
    },
  },
  plugins: [],
}