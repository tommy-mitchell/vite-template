export default {
	extends: ["xo-react", "plugin:@phaphoso/dprint/disable-conflict-rules"],
	ignores: ["src/vite-env.d.ts"],
	rules: {
		"object-shorthand": "off",
		"unicorn/prefer-regexp-test": "off",
		"unicorn/filename-case": ["error", {
			cases: {
				kebabCase: true,
				pascalCase: true,
			},
		}],
		"react/no-array-index-key": "warn",
		"capitalized-comments": ["error", "always", {
			ignorePattern: "dprint-ignore|pragma|ignore|prettier-ignore|webpack\\w+:|c8|type-coverage:",
			ignoreInlineComments: true,
			ignoreConsecutiveComments: true,
		}],
		"import/order": ["error", {
			"groups": [
				"builtin",
				"external",
				"parent",
				"sibling",
				"index",
			],
			"newlines-between": "never",
			"warnOnUnassignedImports": true,
			"distinctGroup": true,
		}],
	},
	overrides: [
		{
			files: "**/*.{ts,cts,mts,tsx}",
			rules: {
				"@typescript-eslint/object-curly-spacing": "off",
				"@typescript-eslint/no-confusing-void-expression": ["error", { ignoreArrowShorthand: true }],
				"n/file-extension-in-import": ["error", "always", { ".ts": "always", ".tsx": "always" }],
				"@typescript-eslint/prefer-regexp-exec": "off",
			},
		},
	],
};
