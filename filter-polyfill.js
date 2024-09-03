let arr = [1, 2, 3, 4, 5];

let new_Arr = arr.filter((val) => {
  return val % 2 == 0;
});

console.log(arr);
console.log(new_Arr);

const conv_arr = my_filter.call(arr, evenfn);

function my_filter(evenfn) {
  let nums = [];
  for (let i = 0; i < this.length; i++) {
    if (evenfn(this[i])) {
      nums.push(this[i]);
    }
  }
  return nums;
}

function evenfn(val) {
  return val % 2 == 0;
}

console.log(conv_arr);

Array.prototype.my_filter_polyfill = function (fn) {
  const new_arr = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      new_arr.push(this[i]);
    }
  }
  return new_arr;
};
