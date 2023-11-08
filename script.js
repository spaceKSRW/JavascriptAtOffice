// const input = document.querySelector("input")
// const defaultText = document.getElementById("default")
// const debounceText = document.getElementById("debounce")
// const throttleText = document.getElementById("throttle")

// input.addEventListener("input",e=>{
//     defaultText.textContent = e.target.value;
// })

let counter = 0;
const getData = () => {
  console.log("fetching data..." + counter++);
};

const getanother=()=>{
    alert("mat kar ")
}
// this magicfunction is debounce method 

const magicfunction = function (fn, d) {
    let timer;
  return function () {
    let context = this,
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context, args);
    }, d);
  };
};

const optimizedfunction = magicfunction(getData, 1000);
