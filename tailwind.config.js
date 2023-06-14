module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      display: ['Inter', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif'],
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
