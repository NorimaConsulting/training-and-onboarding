module.exports = {
  content: [
    './src/**/*.{html,js}',
    './src/**/*.js',
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',

    './public/index.html',
    './index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
