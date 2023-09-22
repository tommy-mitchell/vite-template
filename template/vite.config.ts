import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { reactClickToComponent } from "vite-plugin-react-click-to-component";
import checker from "vite-plugin-checker";
import tsconfigPaths from "vite-tsconfig-paths";
import supportedBrowsers from "vite-plugin-browserslist-useragent";

export default defineConfig({
	plugins: [
		react(),
		reactClickToComponent(),
		checker({
			typescript: true,
			overlay: {
				initialIsOpen: false,
				position: "br",
			},
		}),
		tsconfigPaths(),
		supportedBrowsers(),
	],
});
