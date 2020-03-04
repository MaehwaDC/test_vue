const fs = require('fs');

function generateArr(count, mapFunc) {
  return Array.from(new Array(count), mapFunc);
}

function generateData() {

  const data = generateArr(5, (_, index) => {
    return {
      name: `category_${index}`,
      boards: generateArr(5, (_, index) => ({
        name: `board_${index}`,
        discription: `discription_${index}`,
        users: generateArr(5, () => ({
          imgUrl: "https://picsum.photos/200/300"
        }))
      }))
    }
  })


  fs.writeFile('./', JSON.stringify(data), (err) => {
    if (err) {
      console.err('err', err)
    }
  });
}

generateData();
