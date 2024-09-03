// function Mysetinterval() {
//   let intervalid = 0;
//   let intervalmap = {};
//   function createinterval(callback, delay, ...args) {
//     intervalid++;
//     let id = intervalid;

//     function repeat() {
//       intervalmap[id] = setTimeout(() => {
//         callback(...args);
//         if (intervalmap[id]) {
//           repeat();
//         }
//       }, delay);
//     }
//     repeat();
//     return id;
//   }

//   function clearinterval(intervalaID) {
//     clearTimeout(intervalmap[intervalaID]);
//     delete intervalmap[intervalaID];
//   }

//   return { createinterval, clearinterval };
// }

// const { createinterval, clearinterval } = Mysetinterval();

// let counter = 0;

// let id = createinterval(() => {
//   counter++;
//   console.log("hi");
//   if (counter > 3) {
//     clearinterval(id);
//   }
// }, 2000);

function setinterval_polyfill() {
  let map = {};
  let timeoutid = 0;
  function create_interval(fn, delay, ...args) {
    timeoutid++;

    function repeat() {
      map[timeoutid] = setTimeout(() => {
        fn(...args);
        if (map[timeoutid]) {
          repeat();
        }
      }, delay);
    }

    repeat();
    return timeoutid;
  }

  function clear_interval(id) {
    clearTimeout(map[id]);
    delete map[id];
  }
  return { create_interval, clear_interval };
}

const { create_interval, clear_interval } = setinterval_polyfill();
let sum = 0;

let tid = create_interval(() => {
  console.log("1");
  sum++;
  if (sum > 3) {
    clear_interval(tid);
  }
}, 2000);
