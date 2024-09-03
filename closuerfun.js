for (var i = 0; i < 5; i++) {
  function exec(x) {
    setTimeout(() => {
      console.log(x);
    }, 1000);
  }
  exec(i);
}
