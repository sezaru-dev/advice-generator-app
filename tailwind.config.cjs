/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			screens: {
				sm: '375px',
				md: '768px',
				lg: '1440px',
				xl: '1440px',
				'2xl': '1440px',
			},
			fontSize: {
				qoute: ['1.75rem', '2.13rem'],
			},
			colors: {
				lightCyan: 'hsl(193, 38%, 86%)',
				neonGreen: 'hsl(150, 100%, 66%)',
				grayBlue: 'hsl(217, 19%, 38%)',
				darkGrayBlue: 'hsl(217, 19%, 24%)',
				darkBlue: 'hsl(218, 23%, 16%)',
			},
			boxShadow: {
				btnNeonGreen: '0 0 2rem hsl(150, 100%, 66%)',
			},
		},

		fontFamily: {
			Manrope: ['Manrope, sans-serif'],
		},
	},
	plugins: [],
};
