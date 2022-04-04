/** @format */

module.exports = {
	mode: 'jit',
	theme: {
		extend: {},
		fontFamily: {
			sans: ['ui-sans-serif', 'system-ui'],
			serif: ['ui-serif', 'Georgia'],
			mono: ['ui-monospace', 'SFMono-Regular'],
			Roboto: ['Roboto'],
			body: ['"Open Sans"'],
		},
		screens: {
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }
		},
	},
	plugins: [],
	purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
};
