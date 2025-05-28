// added tailwind to project

/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          'spin-slow': 'spin 8s linear infinite',
        }
      },
    },
    plugins: [require("tailwindcss-animate")],
  }