/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			white: "#ffffff",
			marine: "hsl(213, 96%, 18%)",
			"light-marine": "#164A8A",
			orange: "#FFAF7E",
			pink: "#F9818E",
			purple: "hsl(243, 100%, 62%)",
			pastel: "hsl(228, 100%, 84%)",
			blue: "hsl(206, 94%, 87%)",
			strawberry: "hsl(354, 84%, 57%)",
			"cool-gray": "hsl(231, 11%, 63%)",
			"light-gray": "hsl(229, 24%, 87%)",
			magnolia: "hsl(217, 100%, 97%)",
			alabaster: "hsl(231, 100%, 99%)",
		},
		fontFamily: {
			sans: ["Ubuntu", ...defaultTheme.fontFamily.sans],
		},
		backgroundImage: {
			desktop: "url('public/assets/images/bg-sidebar-desktop.svg')",
			mobile: "url('/public/assets/images/bg-sidebar-mobile.svg')",
		},
	},
	plugins: [],
};
