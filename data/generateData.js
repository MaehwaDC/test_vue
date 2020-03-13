const fs = require('fs');
const path = require('path');

function generateArr(count, mapFunc) {
  return Array.from(new Array(count), mapFunc);
}

function getRandomColor() {
  // return '#' + (((1 << 24) * Math.random()) | 1).toString(16);
  return 'hsl(' + Math.random() * 360 + ', 100%, 95%)';
}

function generateData() {
  const data = generateArr(5, (_, index) => {
    return {
      name: `category_${index}`,
      id: index,
      boards: generateArr(10, (_, boardIndex) => ({
        name: `board_${boardIndex}`,
        id: boardIndex,
        discription: `discription_${boardIndex}`,
        users: generateArr(5, (_, userIndex) => ({
          id: userIndex,
          imgUrl: 'https://picsum.photos/200/300',
        })),
        color: getRandomColor(),
      })),
    };
  });

  fs.writeFile(
    path.join(__dirname, './data.json'),
    JSON.stringify(data),
    err => {
      if (err) {
        // eslint-disable-next-line no-console
        console.error('err', err);
      }
    },
  );
}

generateData();
