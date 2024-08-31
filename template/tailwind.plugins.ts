import process from "node:process";
import plugin from "tailwindcss/plugin";
import type { CSSRuleObject } from "tailwindcss/types/config";

export const hocus = plugin(({ addVariant }) => {
	addVariant("hocus", ["&:hover", "&:focus-visible"]);
	addVariant("group-hocus", [":merge(.group):hover &", ":merge(.group):focus-visible &"]);
});

export const maxWidthContainers = plugin(({ matchVariant, theme }) => {
	const values: Record<string, string> = theme("containers") ?? {};

	function parseValue(value: string) {
		const numericValue = value.match(/^(\d+\.\d+|\d+|\.\d+)\D+/)?.[1] ?? null;
		if (numericValue === null) {
			return null;
		}

		return Number.parseFloat(value);
	}

	type VariantFn = Parameters<typeof matchVariant>["1"];

	const maxVariantFn: VariantFn = (rawValue, { modifier }) => {
		const value = rawValue as string ?? "";
		const parsed = parseValue(value ?? "");

		return parsed === null ? [] : `@container ${modifier ?? ""} (max-width: ${value})`;
	};

	matchVariant("@max", maxVariantFn, {
		values,
	});
});

// https://github.com/jorenvanhee/tailwindcss-debug-screens/blob/master/index.js
export const debugScreens = plugin(({ addComponents, theme }) => {
	if (process.env["NODE_ENV"] !== "development") {
		addComponents({
			".debug-screens": {},
		});

		return;
	}

	const screens = theme("screens", {});

	const prefix = "screen: ";
	const selector = ".debug-screens";

	const components: CSSRuleObject = {
		[`${selector}::before`]: {
			backgroundColor: "black",
			bottom: "0",
			boxShadow: "0 0 0 1px white",
			color: "white",
			content: `'${prefix}_'`,
			fontSize: "12px",
			left: "0",
			lineHeight: "1",
			padding: ".3333333em .5em",
			position: "fixed",
			zIndex: "100",
		},
	};

	for (const [screen] of Object.entries(screens)) {
		components[`@screen ${screen}`] = {
			[`${selector}::before`]: {
				content: `'${prefix}${screen}' !important`,
			},
		};
	}

	addComponents(components);
});
