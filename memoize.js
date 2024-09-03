function add(x, y) {
  return x + y;
}

function memoization(fn) {
  let cache = {};
  return function (...args) {
    let key = JSON.stringify(args);
    if (cache[key]) {
      console.log("cached");
      return cache[key];
    }
    const val = fn.apply(this, args);
    cache[key] = val;
    console.log("from fn");
    return val;
  };
}

const memoziedfn = memoization(add);
console.log(memoziedfn(10, 20));
console.log(memoziedfn(20, 20));
console.log(memoziedfn(10, 20));
console.log(memoziedfn(30, 20));
