import { TooltipProvider } from "@/components/Tooltip";
import { WindowSizeProvider } from "./WindowSizeProvider.tsx";

export function Providers({ children }: React.PropsWithChildren) {
	return (
		<WindowSizeProvider>
			<TooltipProvider delayDuration={500}>
				{children}
			</TooltipProvider>
		</WindowSizeProvider>
	);
}
