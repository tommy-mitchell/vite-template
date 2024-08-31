/* eslint-disable @typescript-eslint/naming-convention */
import pluginContainerQueries from "@tailwindcss/container-queries";
import pluginTypography from "@tailwindcss/typography";
import withModeAwareColors from "tailwind-mode-aware-colors";
import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";
import pluginAnimate from "tailwindcss-animate";
import pluginCenter from "tailwindcss-center";
import pluginRadix from "tailwindcss-radix";
import * as customPlugins from "./tailwind.plugins.js"\

export default withModeAwareColors({
	content: ["./index.html", "./src/**/*.tsx"],
	darkMode: "selector",
	plugins: [
		pluginTypography,
		pluginContainerQueries,
		pluginRadix,
		pluginAnimate,
		pluginCenter,
		...Object.values(customPlugins),
	],
	theme: {
		container: {
			center: true,
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				accent: colors.sky,
				background: {
					active: {
						dark: colors.neutral[800],
						light: colors.white,
					},
					dark: colors.neutral[700],
					light: colors.neutral[50],
				},
				primary: {
					dark: colors.sky[800],
					light: colors.sky[200],
					active: { // eslint-disable-line perfectionist/sort-objects
						dark: colors.sky[900],
						light: colors.sky[300],
					},
					hocus: {
						dark: colors.sky[700],
						light: colors.sky[100],
					},
				},
			},
			textColor: {
				primary: {
					dark: colors.neutral[100],
					light: colors.neutral[950],
				},
				secondary: {
					dark: colors.neutral[200],
					light: colors.neutral[900],
				},
				tertiary: colors.neutral[400],
			},
			typography: {
				DEFAULT: {
					css: {
						code: {
							"@apply rounded-lg px-2 py-1 after:hidden before:hidden": {},
						},
					},
				},
			},
		},
		screens: {
			xs: "475px",
			...defaultTheme.screens,
		},
	},
});
