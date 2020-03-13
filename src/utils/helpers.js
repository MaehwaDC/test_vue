export const random = (min = 0, max = Number.MAX_SAFE_INTEGER) =>
  min + Math.floor((max - min) * Math.random());
