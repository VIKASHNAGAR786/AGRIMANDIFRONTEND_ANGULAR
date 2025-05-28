/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  
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
      animation: {
        pulse: 'pulse 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

