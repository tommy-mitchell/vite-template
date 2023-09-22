// Fallback when crypto.randomUUID() is not available
export const generateUniqueId = () => crypto.randomUUID() ?? Date.now();
