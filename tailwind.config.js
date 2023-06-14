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
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],  
      },
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
