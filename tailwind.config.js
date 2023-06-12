module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
      fontFamily: {
        'headline': ['"Syne"', 'sans-serif'],
      },
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
