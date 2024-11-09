import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import animate from "tailwindcss-animate";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
			"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
			"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
			"./src/blocks/**/*.{js,ts,jsx,tsx,mdx}",
	],
	safelist: [
		{
			pattern:
				/^(bg|text|border|p|m|mt|mb|grid|flex|col|row|gap|space|w|h|prose)-.+/,
		},
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
					foreground: "var(--foreground)",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
					sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: {
						height: "0",
					},
					to: {
						height: "var(--radix-accordion-content-height)",
					},
				},
				"accordion-up": {
					from: {
						height: "var(--radix-accordion-content-height)",
					},
					to: {
						height: "0",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [typography, animate],
};
export default config;
