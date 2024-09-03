const PENDING = 0;
const REJECTED = 1;
const FULLFILLED = 2;

function mypromsie(executor) {
  let state = PENDING;
  let value = null;
  let handlers = [];
  let catchers = [];

  function resolve(val) {
    if (state !== PENDING) return;
    state = FULLFILLED;
    value = val;

    handlers.forEach((h) => h(value));
  }

  function reject(err) {
    if (state !== PENDING) return;
    state = REJECTED;
    value = err;
    catchers.forEach((c) => c(value));
  }

  this.then = function (cb) {
    if (state === FULLFILLED) {
      cb(val);
    } else {
      handlers.push(cb);
    }
  };

  this.catch = function (cb) {
    if (state === REJECTED) {
      cb(val);
    } else {
      catchers.push(cb);
    }
  };

  executor(resolve, reject);
}

const dowork = (res, rej) => {
  if (2 != 2) {
    setTimeout(() => res("resolvec"), 1000);
  } else {
    setTimeout(() => rej("rejected"), 1000);
  }
};

const promise = new mypromsie(dowork);
promise.then((val) => {
  console.log(val);
});
promise.catch((err) => {
  console.log(err);
});
