/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "Green-gradient":
          "linear-gradient(90deg, #75B700 0%, #456B02 6.4%, #97E50E 12.4%, #75B700 16.4%, #E1FEAD 24.9%, #82B22D 28.4%, #95E110 48%, #365400 55.9%, #96E30F 60.98%, #8BD30C 66.4%, #C2FD5B 72.39%, #97E50E 83.4%, #97E50E 91.4%, #235300 100%)",
        "White-gradient":
          "linear-gradient(90deg, #FEF7FF 0%, #A2A0A2 7%, #EEEEEE 10.5%, #A2A0A2 22%, #FFFFFF 40.5%, #7E7E7E 52%, #BFBFBF 60.5%, #939393 80.5%, #FFFFFF 90%, #989499 100%)",
      },
      fontFamily: {
        akira: ['"Akira Expanded"', "sans-serif"],
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        // Add other custom keyframes here...
      },
      // Add custom animations that use the keyframes
      animation: {
        slideIn: 'slideIn 1.0s ease-out forwards',
        fadeInScale: 'fadeInScale 2.0s ease-in-out forwards',
        // Add other custom animations here...
      },
      
    },
  },
  plugins: [],
};

