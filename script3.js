const fireEvent = function () {
  const width = window.innerWidth;
  const message = document.getElementById("message");
  if (width < 768) {
    console.log("small size");
  } else {
    console.log("large size");
  }
};

const throttledfunction = throttle(fireEvent, 500);

function throttle(fireEvent, delay) {
  let flag = true;
  let context = this;
  args = arguments;
  return function () {
    if (flag) {
      fireEvent();
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
}

//throttling in js
window.addEventListener("resize", throttledfunction);
