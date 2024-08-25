/** @type {import('tailwindcss').Config} */
const colors = {
  primary: "#3498db",
  secondary: "#66d9ef",
  background: "#f7f7f7",
  text: "#333333"
};

module.exports = {
  mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        'custom-blue': '#1fb6ff',
        'custom-purple': '#7e5bef',
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Helvetica Neue", 'Arial', "sans-serif"],
        'serif': ['Merriweather', 'Georgia', 'serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  variants: {},
  plugins: [],
}