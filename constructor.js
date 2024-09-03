function car(name) {
  console.log(this);
  this.Name = name;
}

// const car1 = new car("hi");
new car();
