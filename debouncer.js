const apicall = () => {
  console.log("api call");
};

const debouncedfunction = debouncer(apicall, 1000);

function debouncer(fn, delay) {
  let timeoutid;
  return function (...args) {
    let context = this;
    clearTimeout(timeoutid);
    timeoutid = setTimeout(() => {
      fn.apply(context, [...args]);
    }, delay);
  };
}
