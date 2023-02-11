/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
		colors: {
			dark: "#141115",
			grey: "#F7F7F7",
			seasalt: "#757083",
			jade: "#57A773",
			green: "#157145",
		},
		fontFamily: {
			ProximaNova: "Proxima-Nova"
		}
  },
  plugins: [],
}