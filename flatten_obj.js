const values = {
  1: "2",
  2: "3",
  hello: {
    a: "b",
    b: "c",
  },
};

function flat(obj, flatten_obj, parent) {
  for (let key in obj) {
    let new_key = parent ? parent + "_" + key : key;
    if (typeof obj[key] === "object") {
      return flat(obj[key], flatten_obj, new_key);
    } else {
      flatten_obj[new_key] = obj[key];
    }
  }
  return flatten_obj;
}

let new_obj = flat(values, {});

console.log(new_obj);
