export const secondsToMs = (seconds: number) => seconds * 1000;

// eslint-disable-next-line no-promise-executor-return
export const waitForMs = async (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
