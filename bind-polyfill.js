let person = {
  name: "adam",
  age: 25,
};

function showDetails(city, state) {
  console.log(`${this.name} is ${this.age} from ${city} in ${state}`);
}

let binded = showDetails.bind(person, "noida");
binded("up");

Function.prototype.mybind = function (...args) {
  let context = this;
  let obj = args[0];
  let params1 = args.slice(1);
  return function (...args2) {
    context.apply(obj, [...params1, ...args2]);
  };
};

let binded2 = showDetails.mybind(person, "noida");
binded2("up");

Function.prototype.my_bind_polyfill = function (...args) {
  const context = this;
  const obj = args[0];
  const params = args.slice(1);
  return function (...args2) {
    context.apply(obj, [...params, ...args2]);
  };
};
