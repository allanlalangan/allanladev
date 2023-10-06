/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateRows: {
				8: 'repeat(8, 1fr)',
				10: 'repeat(10, 1fr)',
				12: 'repeat(12, 1fr)',
				24: 'repeat(24, 1fr)',
			},
		},
	},
	plugins: [],
};
