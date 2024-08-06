import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
  
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
			boxShadow: {
				"3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
				opaq: "0 4px 16px 6px rgba(0,0,0,0.4)",
				full: "0 3px 1px -2px rgba(0,0,0, 0.2), 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12) ",
			},
      fontFamily:{
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
        mono: ["Space Mono", "monospace"],
        poppins: ["Poppins", "sans-serif"],
      },
			colors: {
				secondary :"#0095e8",
				primary: {
				50: "#60c8ff",
        100: "#42bdff",
        200: "#23b2ff",
        300: "#05a7ff",
        400: "#0095e8", // primary
        500: "#0588cf",
        600: "#097bb9",
        700: "#0c6ea3",
        800: "#0e628f",
        900: "#10567b"
				},
				"lily-white": {
					50: "#effaff",
					100: "#e3f5ff", //#e3f5ff
					200: "#b8eaff",
					300: "#79daff",
					400: "#32c8fe",
					500: "#07b2f0",
					600: "#008fce",
					700: "#0072a6",
					800: "#036089",
					900: "#094f71",
					950: "#06324b",
				},

				green: {
					50: "#f0fdf4",
					100: "#dbfde8",
					200: "#baf8d2", //light green
					300: "#84f1ae",
					400: "#47e183",
					500: "#1fcd64", //#1FCD64
					600: "#13a64d", //base green
					700: "#13823f",
					800: "#148373",
					900: "#13542f",
					950: "#042f17",
				},
				gray: {
					50: "#f5f5f6",
					100: "#e6e6e7",
					200: "#cfcfd2",
					300: "#aeafb2",
					400: "#85878b",
					500: "#6a6c70", //#6C6C77
					600: "#57585b",
					700: "#4d4e51",
					800: "#444546",
					900: "#3c3c3d",
					950: "#252527",
				},
				red: {
					50: "#fff1f1",
					100: "#ffe0e0",
					200: "#ffc7c7",
					300: "#ffa1a0",
					400: "#ff6a69",
					500: "#fa4a49", //#fa4a49
					600: "#e71c1b",
					700: "#c31312",
					800: "#a11413",
					900: "#851817",
					950: "#490606",
				},
				yellow: {
					50: "#ffffea",
					100: "#fffcc5",
					200: "#fff985",
					300: "#fff046",
					400: "#ffe21b",
					500: "#f8bd00",
					600: "#e29600",
					700: "#bb6b02",
					800: "#985208",
					900: "#7c430b",
					950: "#482300",
				},
				gold: {
					50: "#fcfbea",
					100: "#f8f8c9",
					200: "#f2ef96",
					300: "#eadf5a",
					400: "#e2cd2d",
					500: "#cdb11f",
					600: "#b59019",
					700: "#916917",
					800: "#78541b",
					900: "#67461c",
					950: "#3c250c",
				},
			},
		},
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config