/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		extend: {
			fontWeight: {
				regular: 400,
				medium: 500,
			},
			/* 
			colors: {

				principal	:	"var(--principal)",
				secondary	:	"var(--secondary)",
				extra		:	"var(--extra)",
				supply		:	"var(--supply)",

				info		:	"var(--blue)",
				success		:	"var(--green)",
				warning		:	"var(--yellow)",
				danger		:	"var(--red)",

				sky			:	"var(--sky)",
				light		:	"var(--light)",
				white		:	"var(--white)",
				gray		:	"var(--gray)",
				dark		:	"var(--dark)",
				black		:	"var(--black)",

				darkblue	:	"var(--darkblue)",
				darkgreen	:	"var(--darkgreen)",

				txtdark		:	"var(--textdark)",
				txtlight	:	"var(--textlight)",

			},
			*/
		},
	},
	plugins: [],
};
