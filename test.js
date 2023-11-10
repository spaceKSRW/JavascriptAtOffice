// TEST WEEKLY'

// 1)  b
// 2)  d
// 3)  b
// 4)  c
// 5)  c

// 6)
// function sum(arr)
// {
//     let sum=0
//     for(let vals of arr)
//     {
//         sum+=vals
//     }
//     return sum
// }

// let ar=[1,2,3,4]
// console.log(sum(ar))

// 7)
// function reverse(str){
//     let arr= str.split('')
//     let i=0;
//     while(i<arr.length/2)
//     {
//         let temp=arr[i];
//         arr[i]=arr[arr.length-i-1]
//         arr[arr.length-i-1]=temp
//         i++
//     }
//  let ans = arr.join('')
//  return ans
// }
// console.log(reverse("karan"))

//8)

//   function group(data) {
//     let ans = {};
//     for (let val of data) {

//       if (ans[val.name]) {
//         ans[val.name].push(val);

//       } else {
//         ans[val.name] = [val];
//       }
//     }
//     return ans;
//   }

//   const data = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Jane" },
//     { id: 3, name: "John" },
//   ];

// console.log(group(data))

//9

// function doubled(arr)
// {
//     let ans=arr.map(ele=>ele*2)
//     return ans;

// }

// let arr=[1,2,3,4,5,6]
// console.log(doubled(arr))

//10

// const teacher=function()
// {
//   this.grade=this.grade+1
// }
// const student = function student(names , age, grade)
// {
//     this.names=names
//     this.grade=grade
//     this.age=age
// }

// let newstud= new student("karan",22,12)
// console.log(newstud)
// teacher.call(newstud)
// console.log(newstud)

//11
// function disp() {
//   setTimeout(() => {
//     console.log("Hello world!!");
//   }, 3000);
// }
// disp()

//12

// let arr=[1,2,3,4,5,6,7,8]
// let newarr=  arr.map(ele=>ele*2).filter((ele)=>{
//     if(ele>5) return ele
// }).reduce((acc,ele)=>{
//      return acc+ele
// },0)
// console.log(newarr);

//13

//  the answer will remain same i.e 42 because the const value has been assigned to 24 inside the updatevalues block (block space)
//  will be changed to 24 since the refernece has been passed

//14

// function solve(data)
// {
//     let cred=0;
//     let debt=0;
//     for(let vals of data)
//     {
//         if(vals.type==="credit")
//         {
//             cred+=parseInt(vals.amount)
//         }
//         else{
//             debt+=parseInt(vals.amount)
//         }

//     }
//     return [cred,debt]
// }
// const transactions = [
//     { amount: 500, type: 'credit' },
//     { amount: 300, type: 'debit' },
//     { amount: 200, type: 'credit' },
//   ];

//   console.log(solve(transactions))

//15
// const _=require('lodash')
// function solve(data) {
//   let obj = {};
//   for (let vals of data) {
//     let date = parseInt(vals.date.substring(0, 4));
//     if (date == 2023) {
//       if (obj[vals.customer]) {
//         obj[vals.customer].push(vals);
//       } else {
//         obj[vals.customer] = [vals];
//       }
//     }
//   }
//   return obj;
// }

// const salesOrders = [
//   { customer: "Customer A", amount: 500, date: "2023-03-15" },
//   { customer: "Customer B", amount: 300, date: "2023-11-20" },
//   { customer: "Customer A", amount: 200, date: "2023-05-10" },
// ];

// let obj = solve(salesOrders);

// function joins(obj)
// {
//   let ans={}
//   for
// }
function disp(){
    console.log("hello world")
}
// disp()
Function.prototype.meet = function(){
    console.log("meeting at 6pm")
}


disp.meet()