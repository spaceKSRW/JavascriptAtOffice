// let obj=[
//     {name:"karan",friend:"abhijeet"},
//     {name:"aditya" , friend:"saurav"},
//     {name:"narender",friend :"surender"},
//     {name:"kunal", friend:"giri"},
// ]

// let names={}

// for(let vals of obj)
// {
//     if(names["friends"])
//     {
//         names.friends.push(vals.name)
//     }
//     else{
//     names["friends"]=[vals.name]
//     }
// }
// console.log(names);

// const li = [
//   ["karan", 22, "M"],
//   ["amit", 23, "M"],
//   ["aditya", 23, "M"],
//   ["aditya", 22, "M"],
//   ["karan", 21, "M"],
//   ["karan", 29, "M"],
// ];

// let obj={}
// let newobj = li.map((ele,ind,li)=>{
//     if(obj[ele[0]]){
//       obj[ele[0]].push({
//         age:ele[1],
//         gender:ele[2]
//       })
//     }
//     else{
//       obj[ele[0]]=[{age:ele[1],gender:[ele[2]]}]
//     }
// })
// console.log(obj)



// let newobj = li.reduce((customer, line) => {
//   if (customer[line[0]]) {
//     customer[line[0]].push({
//       age: line[1],
//       gender: line[2],
//     });
//   } else {
//     customer[line[0]] = [];
//     customer[line[0]].push({
//       age: line[1],
//       gender: line[2],
//     });
//   }

//   return customer;
// }, {});
// console.log(newobj);
// const promise = new Promise((res,rej)=>{
//   setTimeout(()=>{
//     res("task comeplete");
//   },3000)
// })
// console.log(promise)
// promise.then((data)=>{
//   console.log(data)
// }
// )

// setTimeout(()=>{
//   console.log(promise)
// },4000)


