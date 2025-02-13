/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
			fontFamily: {
				robotoSlab: ["Roboto Slab", "serif"],
				roboto: ["Press Start 2P", "cursize"],
			},
  		
  		
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
