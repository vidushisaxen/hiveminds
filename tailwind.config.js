/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: '#134BD6',
  			body: '#111111'
  		},
		  animation: {
			marquee: 'marquee var(--duration, 30s) linear infinite'
		  },
		  keyframes: {
			marquee: {
			  to: { transform: 'translateX(-50%)' }
			},
		  },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		backgroundImage: {
  			'grid-pattern': '',
  			'grid-pattern-light': '',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
