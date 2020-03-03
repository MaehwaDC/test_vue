
export const random = (min = 0, max = Number.MAX_SAFE_INTEGER) => (
  min + Math.floor((max - min) * Math.random())
);

export const getRandomColor = (colors) => (
  colors[random(0, colors.length)]
);
