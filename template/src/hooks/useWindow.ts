import React from "react";

type WindowSize = {
	height?: number;
	width?: number;
};

export const useWindow = () => {
	const [size, setSize] = React.useState<WindowSize>({});

	React.useLayoutEffect(() => {
		const handleResize = () => {
			setSize({ height: window.innerHeight, width: window.innerWidth });
		};

		handleResize();

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return size;
};
