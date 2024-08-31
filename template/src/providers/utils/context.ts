import { useContext } from "react";
import { MissingProviderError } from "./MissingProviderError.ts";

type ProviderContext<T> = {
	context: React.Context<T>;
	name: string;
};

export const getProviderContext = <T>({ context, name }: ProviderContext<T>) => (): T => {
	const data = useContext(context);

	if (!data) {
		throw new MissingProviderError(name);
	}

	return data;
};
