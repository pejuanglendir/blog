module.exports = {
  content: ["./**/*.html"],
  theme: {
    fontFamily: {
      display: ['Inter', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
    },
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
