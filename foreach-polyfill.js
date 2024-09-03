Array.prototype.my_for_each = function (fn, context) {
  for (let i = 0; i < this.length; i++) {
    if (this.indexOf(this[i]) > -1) {
      fn.call(context, this[i], i, this);
    }
  }
};

const arr = [1, 2, 3, 4];

arr[90] = 10;
console.log(arr);
arr.my_for_each((item, index) => {
  arr[index] = item * 2;
});
console.log(arr);
