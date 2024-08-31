import * as React from "react";
import type { EmptyObject, Merge } from "type-fest";
import type { PropsWithClassName } from "./class-names.ts";

export function forwardRef<
	ElementType extends React.ElementType,
	CustomPropsType extends Record<string, unknown> = EmptyObject,
	OmitPropsType extends keyof React.ComponentPropsWithoutRef<ElementType> = never,
	ElementRefType = React.ElementRef<ElementType>,
	PropsType = PropsWithClassName<
		Merge<Omit<React.ComponentPropsWithoutRef<ElementType>, OmitPropsType>, CustomPropsType>
	>,
>(
	displayName: string | undefined,
	render: React.ForwardRefRenderFunction<ElementRefType, PropsType>,
) {
	const component = React.forwardRef<ElementRefType, PropsType>(render);
	component.displayName ??= displayName ?? render.displayName ?? render.name;
	return component;
}
