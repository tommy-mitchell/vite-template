import getRange from "get-range";

export { default as getRange } from "get-range";

export const range = (length: number) => [...getRange({ end: length })];
