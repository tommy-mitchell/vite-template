import { type ClassNameValue as ClassName, twMerge } from "tailwind-merge";

export type { ClassNameValue as ClassName } from "tailwind-merge";

export type ClassNameProp = Readonly<{
	className?: ClassName;
}>;

// dprint-ignore
export type PropsWithClassName<PropsType> = (
	ClassNameProp & Omit<PropsType, "className">
);

export const cn = (input: ClassName, ...inputs: ClassName[]) => twMerge(input, ...inputs);
