import process from "node:process";
import mdx from "@mdx-js/rollup";
import react from "@vitejs/plugin-react-swc";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
import { reactClickToComponent } from "vite-plugin-react-click-to-component";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	base: "/{{ tmplr.project_name | skip: @tommy-mitchell/ }}/",
	css: {
		postcss: {
			plugins: [tailwindcss, autoprefixer],
		},
		preprocessorOptions: {
			scss: {
				additionalData: `$is_dev: ${process.env.NODE_ENV !== "production"};`,
			},
		},
	},
	plugins: [
		{ enforce: "pre", ...mdx() },
		react(),
		reactClickToComponent(),
		checker({
			overlay: {
				initialIsOpen: false,
				position: "br",
			},
			typescript: true,
		}),
		tsconfigPaths(),
	],
});
