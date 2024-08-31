import React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/helpers/class-names";

export const TooltipProvider = TooltipPrimitive.Provider;

type TooltipPrimitiveProps = Omit<
	React.ComponentProps<typeof TooltipPrimitive.Content>,
	"content" | "onEscapeKeyDown" | "onPointerDown" | "onPointerDownOutside"
>;

// dprint-ignore
export type TooltipProps = Readonly<{
	content: React.ReactNode;
	delay?: number;
}> & TooltipPrimitiveProps;

export function Tooltip({ asChild, children, className, content, delay, ref, ...props }: TooltipProps) {
	const [isOpen, setIsOpen] = React.useState(false);
	const [isToggled, setIsToggled] = React.useState(false);

	const triggerRef = React.useRef<React.ComponentRef<typeof TooltipPrimitive.Trigger>>(null);

	if (!content) {
		return children;
	}

	return (
		<TooltipPrimitive.Root delayDuration={delay} open={isOpen || isToggled} onOpenChange={setIsOpen}>
			<TooltipPrimitive.Trigger
				ref={triggerRef}
				asChild={asChild}
				// dprint-ignore
				className={cn(!asChild && `
					underline decoration-dotted decoration-[1.5px]
					hocus-visible:decoration-solid hocus-visible:decoration-1
					radix-state-delayed-open:decoration-solid radix-state-delayed-open:decoration-1
					radix-state-instant-open:decoration-solid radix-state-instant-open:decoration-1
				`)}
				type="button"
				onClick={() => setIsToggled(!isToggled)}
			>
				{children}
			</TooltipPrimitive.Trigger>
			<TooltipPrimitive.Portal>
				<TooltipPrimitive.Content
					ref={ref}
					// dprint-ignore
					className={cn(`
						z-50 overflow-hidden rounded-md border-2 border-white bg-gray-500 px-3 py-1 text-sm shadow-md
						max-w-radix-tooltip-content-available max-h-radix-tooltip-content-available animate-in fade-in-0 zoom-in-95
						radix-side-bottom:slide-in-from-top-2
						radix-side-left:slide-in-from-right-2
						radix-side-right:slide-in-from-left-2
						radix-side-top:slide-in-from-bottom-2
						radix-state-closed:animate-out radix-state-closed:fade-out-0 radix-state-closed:zoom-out-95
					`,
						className,
					)}
					collisionPadding={8}
					side="bottom"
					sideOffset={4}
					onEscapeKeyDown={() => setIsToggled(false)}
					onPointerDown={() => setIsToggled(true)}
					onPointerDownOutside={event => {
						event.preventDefault();

						if (triggerRef.current?.contains(event.target as HTMLElement)) {
							return;
						}

						setIsToggled(false);
					}}
					{...props}
				>
					<TooltipPrimitive.Arrow className="fill-white" />
					{content}
				</TooltipPrimitive.Content>
			</TooltipPrimitive.Portal>
		</TooltipPrimitive.Root>
	);
}
