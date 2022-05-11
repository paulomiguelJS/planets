module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    extend: {
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-20px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        }
    },
    animation: {
        'fade-in-down': 'fade-in-down 2s ease-out'
    },
      colors: {
        "grey-border": "#979797",
      },
      fontFamily: {
        title: ['Antonio'],
        body: ['League Spartan']
      }
    },
  },
  plugins: [],
};
