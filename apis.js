// function useCurrencyInfo(currency) {
//   fetch(`https://jsonplaceholder.typicode.com/todos/${currency}`)
//     .then((res) => res.json())
//     .then((data) => {
//       for (let vals in data) {
//        if(vals=="title")
//        {
//         console.log(data[vals])
//        }
//       }
//     });
// }
// useCurrencyInfo(1);
// let intervals;
// let i=1;

// function fetchDetails() {

//   useCurrencyInfo(i + "");
//   i++;
//   if (i > 5000) {
//     clearInterval(intervals);
//   }
// }

// intervals = setInterval(fetchDetails,20);

// fetchDetails();

// async function getTodo(id) {
//   let p = fetch("https://jsonplaceholder.typicode.com/posts/"+id);
//   let r = await p.json();
//   return r;
// }

// async function createTodo() {
//   let options = {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify({
//       title: "karan",
//       body: "rawat",
//       userId: 1,
//     }),
//   };

//   let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
//   let res = await p.json();
//   return res;
// }
// createTodo().then((data) => {
//   console.log(data);
// });

// async function mainFunc() {
//   let todo = await createTodo();
//   console.log(todo);
// }
//  mainFunc();

// console.log(await getTodo(567));

// const axios = require('axios');

// async function fetchData() {
//   try {
//     // Make a GET request to JSONPlaceholder
//     const response = await axios.get('https://jsonplaceholder.typicode.com/posts/');

// Access the data from the response
//     const data = response.data;

//     console.log(data);
//   } catch (error) {
//     console.error('Error fetching data:', error.message);
//   }
// }

// // Call the fetchData function
// fetchData();

const axios = require('axios');
const url = "https://jsonplaceholder.typicode.com/posts"

const data={
  title:"karan",
  body:"rawat",
  userId:1,
}
const options = {
  method:"POST",
  headers:{
    'Content-type':'application/json',

  },
  body:JSON.stringify(data)
}
function usingThen(){
  const sendData = fetch(url,options);

  return sendData;
}
async function usingAsync(){
  const res = await axios.post(url,data);
  return res;
}


usingAsync().then((res)=>{
  console.log(res.data);
})


  usingThen().then((res)=>{
    return res.json()
  }).then((res)=>{
    console.log(res)
  })
