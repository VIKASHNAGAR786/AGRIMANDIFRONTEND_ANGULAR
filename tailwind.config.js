/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  
  darkMode: 'media', 
  important: true,
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {

      dropShadow: {
        neon: '0 0 12px #00ffee',
        'neon-lg': '0 0 24px #00ffee',
      },
      keyframes: {
        fadeInSlide: {
          '0%': { opacity: 0, transform: 'translateY(40px) scale(0.95)' },
          '100%': { opacity: 1, transform: 'translateY(0) scale(1)' },
        },
        floatLeaf: {
      '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
      '50%': { transform: 'translateY(-40px) rotate(180deg)' }
    }
      },
      animation: {
        pulse: 'pulse 4s ease-in-out infinite',
        'fade-in-slide': 'fadeInSlide 0.6s ease-out forwards',
        'float-leaf': 'floatLeaf 10s ease-in-out infinite'
      },
    },
  },
  plugins: [],
}

