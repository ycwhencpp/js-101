function addx(x) {
  return function (y) {
    console.log(x + y);
  };
}

const addwithsome = addx(4);
addwithsome(10);
