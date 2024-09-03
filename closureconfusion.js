function create() {
  let count = 0;

  function increment() {
    count = count + 1;
  }
  console.log(count);
  let msg = `count is ${count}`;

  function log() {
    console.log("count", count);
    console.log(msg);
  }

  return { increment, log };
}

const { increment, log } = create();

increment();
increment();
increment();
increment();
increment();

log();
