export class MissingProviderError extends Error {
	constructor(name: string) {
		super(`Cannot consume ${name} context without a ${name}Provider`);
	}
}
