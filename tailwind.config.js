module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "background-bg": "var(--background-bg)", 
      "background-fg": "var(--background-fg)", 
      "text-title": "var(--text-title)", 
      "text-body": "var(--text-body)",
      "red": "var(--red)",
      "green": "var(--green)",
      "blue": "var(--blue)", 
    },
    fontFamily: {
      // sans: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}