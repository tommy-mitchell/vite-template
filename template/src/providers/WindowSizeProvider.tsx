import React from "react";
import { useWindow } from "@/hooks/useWindow";
import { getProviderContext } from "./utils/context.ts";

type WindowSizeContextValue = Readonly<{
	height?: number;
	width?: number;
}>;

// eslint-disable-next-line @typescript-eslint/ban-types
const WindowSizeContext = React.createContext<WindowSizeContextValue | null>(null);

export function WindowSizeProvider({ children }: React.PropsWithChildren) {
	const { height, width } = useWindow();

	React.useLayoutEffect(() => {
		if (width === undefined || height === undefined) {
			return;
		}

		const root = window.document.body;

		root.dataset["windowHeight"] = `${height}px`;
		root.dataset["windowWidth"] = `${width}px`;
	}, [width, height]);

	const value = React.useMemo(() => ({ height, width }), [height, width]);

	return (
		<WindowSizeContext.Provider value={value}>
			{children}
		</WindowSizeContext.Provider>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export const useWindowSize = getProviderContext({
	context: WindowSizeContext,
	name: "WindowSize",
});
