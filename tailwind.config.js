/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: "Oswald_600SemiBold",
        subtitle: "Oswald_500Medium",
        body: "Oswald_400Regular",
        bold: "Oswald_700Bold",
      }
    },
  },
  plugins: [],
}

