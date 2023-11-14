function useCurrencyInfo(currency) {
  fetch(`https://jsonplaceholder.typicode.com/todos/${currency}`)
    .then((res) => res.json())
    .then((data) => {
      for (let vals in data) {
       if(vals=="title")
       {
        console.log(data[vals])
       }
      }
    });
}

let intervals;
let i=1;

function fetchDetails() {

  useCurrencyInfo(i + "");
  i++;
  if (i > 5000) {
    clearInterval(intervals);
  }
}

intervals = setInterval(fetchDetails,20);

fetchDetails();