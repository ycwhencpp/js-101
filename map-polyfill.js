let arr = [1, 2, 3, 4, 5];

let new_arr = arr.map((val) => {
  return val * val;
});

console.log(arr);
console.log(new_arr);

function my_map(fn) {
  let nums = [];
  console.log(this);
  for (let i = 0; i < this.length; i++) {
    nums.push(fn(this[i]));
  }

  return nums;
}
const square = (val) => {
  return val * val;
};

let conv_arr = my_map.call(arr, square);
console.log(conv_arr);

Array.prototype.my_map_polyfill = function (fn) {
  const new_arr = [];
  for (let i = 0; i < this.length; i++) {
    new_arr.push(fn(this[i]));
  }
  return new_arr;
};
