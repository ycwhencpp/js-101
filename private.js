let myfunction = function () {
  let name = "";
  let getname = function () {
    return name;
  };

  let setname = function (n) {
    name = n;
  };

  return { getname, setname };
};

let fn = myfunction();
fn.setname("dde");

console.log(fn.getname());
