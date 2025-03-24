/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
          colors:{
            "primary-color": "var(--curve-primary-color)",
            "primary-color-light": "var(--curve-primary-light-color)",
            "secondary-color": "var(--curve-secondary-color)",
            "primary-text": "var(--curve-primary-text)",
            "primary-bg-light-grey": "var(--curve-bg-light-grey)",
          },
          keyframes: {
            scroll: {
              '0%': { transform: 'translateX(100%)' },
              '100%': { transform: 'translateX(-100%)' },
            },
          },
          animation: {
            scroll: 'scroll 60s linear infinite',
          },
        },
        screens: {
          phone: {max: "500px"},
          tab: {max: "850px"},
          laptop_L: {max: "1500px"},
          laptop: {max: "1200px"},
          smphone: {max: "340px"},
          midphone : {max : '425px' }
      },
    },
    plugins: [],
  };
  