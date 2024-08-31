
import { useBoop, type UseBoopOptions } from "use-boop-simple";
import { Tooltip } from "@/components/Tooltip";
import { VisuallyHidden } from "@/components/VisuallyHidden";
import { type ClassName, cn } from "@/helpers/class-names";
import type { OneOrMoreOf, OneOrNoneOf } from "@/utils/types";
import { ALL_ICONS, type IconName } from "./constants.ts";

// dprint-ignore
export type IconProps = Readonly<{
	boop?: UseBoopOptions;
	className?: ClassName;
	name: IconName;
	wrapperClassName?: ClassName;
} & OneOrMoreOf<{
	label: string;
	title: string;
}> & OneOrNoneOf<{
	href: string;
	/** @default true */
	openInNewTab?: boolean;
}, {
	/** @default "button" */
	type?: "button" | "submit";
	onClick: () => void;
}>>;

export default function Icon({
	boop: boopOptions,
	className,
	href,
	label,
	name,
	onClick,
	openInNewTab = true,
	title,
	type = "button",
	wrapperClassName,
}: IconProps) {
	const { boop: defaultBoopOptions, icon: Component } = ALL_ICONS[name];
	const [boop, boopTrigger] = useBoop(boopOptions ?? defaultBoopOptions);

	const BoopComponent = href
		? "a"
		: (onClick ? "button" : "div");

	const boopProps = href
		? { href, ...openInNewTab && { rel: "noreferrer", target: "_blank" } }
		: (onClick ? { onClick, type } as const : {});

	if (!Component) {
		console.warn(`Icon "${name}" not found`);
		return;
	}

	return (
		<Tooltip asChild content={title} delay={750}>
			<BoopComponent
				className={cn("group block w-fit will-change-transform", wrapperClassName)}
				style={boop}
				onFocus={boopTrigger}
				onPointerDown={boopTrigger}
				onPointerEnter={boopTrigger}
				{...boopProps}
			>
				{/* https://github.com/radix-ui/primitives/blob/main/packages/react/accessible-icon/src/AccessibleIcon.tsx */}
				<Component
					aria-hidden="true"
					className={cn("h-auto w-full", className)}
					focusable="false"
				/>
				<VisuallyHidden>{label ?? title}</VisuallyHidden>
			</BoopComponent>
		</Tooltip>
	);
}
