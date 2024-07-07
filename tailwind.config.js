/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

    theme: {
      extend: {
        colors: {
          cyan: {
            500: '#00bcd4',
          },
          blue: {
            500: '#3498db',
          },
        },
      },
    },

  plugins: [],
}

