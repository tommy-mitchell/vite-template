import type * as React from "react";

export type SetState<StateType> = React.Dispatch<React.SetStateAction<StateType>>;

export type ChildrenProp = Readonly<{
	children: React.ReactNode;
}>;
