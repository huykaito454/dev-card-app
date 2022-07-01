module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Trispace', 'sans-serif'],
      },
      colors: {
        primary: '#FF66C4',
        header: '#2C2C2C',
      },
      backgroundImage: {
        register: "url('./assets/image/background_wave.svg')",
        check: "url('./assets/image/check_circle.svg')",
      },
    },
  },
  plugins: [],
};
