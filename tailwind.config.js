module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Maven Pro', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        swedishBlue: '#005cbf',
        swedishYellow: '#ffcd00',
        darkWater: '#1e293b',
      },
    },
  },
  plugins: [],
}
