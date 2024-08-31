import type { RequireAtLeastOne, RequireOneOrNone } from "type-fest";

export type OneOrMoreOf<T> = RequireAtLeastOne<T>;

export type OneOrNoneOf<T, U = unknown> = U extends Record<string, any> ? OneOf<T, U> : RequireOneOrNone<T>;

/* eslint-disable perfectionist/sort-intersection-types, perfectionist/sort-union-types */
// dprint-ignore
export type OneOf<T, U> = (
	| (U & { [K in keyof T]?: never })
	| (T & { [K in keyof U]?: never })
	| { [K in keyof T | keyof U]?: never }
);
/* eslint-enable perfectionist/sort-intersection-types, perfectionist/sort-union-types */
