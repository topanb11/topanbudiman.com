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
			white: "#F7F7F7",
			grey: "#757780",
			jade: "#57A773",
			green: "#157145",
		},
		fontFamily: {
			ProximaNova: "Proxima-Nova"
		}
  },
  plugins: [],
}