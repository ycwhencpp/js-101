function infinite(x) {
  return function (y) {
    if (y) {
      return infinite(x + y);
    } else {
      return x;
    }
  };
}

console.log(infinite(2)(3)(4)(5)());
console.log(infinite(2)(3)());

function fn(x) {
  return function (y) {
    if (y) {
      return fn(x + y);
    } else {
      return x;
    }
  };
}
