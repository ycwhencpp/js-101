const expensiveFunction = () => {
  console.log("expsenive");
};

const improvedFunction = throttle(expensiveFunction, 300);

document.addEventListener("resize", improvedFunction);

function throttle(fn, limit) {
  let flag = true;
  return function (...args) {
    const context = this;
    if (flag) {
      fn.apply(context, [...args]);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
}
