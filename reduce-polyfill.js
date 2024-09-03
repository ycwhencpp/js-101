let arr = [1, 2, 3, 4, 5];

let val = arr.reduce((vale, acc) => {
  return vale + acc;
}, 0);

console.log(val);

let conv_val = my_reduce.call(arr, fn, 0);

function my_reduce(fn, acc) {
  let new_val = acc;

  for (let i = 0; i < this.length; i++) {
    new_val = fn(this[i], new_val);
  }
  return new_val;
}

function fn(val, acc) {
  return val + acc;
}

console.log(conv_val);

Array.prototype.my_reduce_polyfill = function (fn, acc) {
  for (let i = 0; i < this.length; i++) {
    acc = fn(this[i], acc);
  }
  return acc;
};

console.log(arr.my_reduce_polyfill(fn, 0));
