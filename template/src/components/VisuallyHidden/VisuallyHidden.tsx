import React from "react";

export function VisuallyHidden({ children }: React.PropsWithChildren) {
	const [forceShow, setForceShow] = React.useState(false);

	React.useEffect(() => {
		if (import.meta.env.DEV) {
			const handleKeyDown = (event: KeyboardEvent) => {
				if (event.key === "Alt") {
					setForceShow(true);
				}
			};

			const handleKeyUp = (event: KeyboardEvent) => {
				if (event.key === "Alt") {
					setForceShow(false);
				}
			};

			window.addEventListener("keydown", handleKeyDown);
			window.addEventListener("keyup", handleKeyUp);

			return () => {
				window.removeEventListener("keydown", handleKeyDown);
				window.removeEventListener("keyup", handleKeyUp);
			};
		}

		// eslint-disable-next-line @typescript-eslint/no-empty-function
		return () => {};
	}, []);

	if (forceShow) {
		return <span className="text-xs">{children}</span>;
	}

	return <span className="sr-only">{children ?? ""}</span>;
}
