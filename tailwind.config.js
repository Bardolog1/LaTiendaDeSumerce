/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        verdeMusgo: "#4B6F44",
        azulProfundo: "#1A3D6D",
        terracota: "#A65F3E",
        amarilloOcre: "#D4A017",
        blancoHueso: "#F5F5DC",
        grisPiedra: "#7D7D7D",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
