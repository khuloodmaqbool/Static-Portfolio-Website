
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'custom-yellow': 'rgb(255,195,80)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

