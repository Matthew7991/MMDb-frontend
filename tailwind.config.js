/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Poppins-Bold": "Poppins-Bold",
        "Poppins-Light": "Poppins-Light",
        "Poppins-Medium": "Poppins-Medium",
        "Poppins-ExtraBold": "Poppins-ExtraBold",
        "Poppins-SemiBold": "Poppins-SemiBold",
      },
      colors: {
        green: "#2A9D8F",
        yellow: "#E9C46A",
        grey: "#264653",
        red: "#A16171",
        "green-transparent": "#2A9D8F80",
      },
    },
  },
  plugins: [],
}
