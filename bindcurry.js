function add(a, b) {
  console.log(a + b);
}

let addwith2 = add.bind(this, 2, 7);

console.log(addwith2(3));

const addwitha = add.bind(this, 2);
