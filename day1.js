// const id = new Symbol("Karan")
// const id2 = new Symbol("Karan")
// if(id==id2){
//     console.log("it is true!!")
// }
// let arr = [1,2,3,4,5,6,7]
// console.log(arr.slice(1,3))
// console.log(arr.splice(1,2))
// console.log(arr)
// let name="karan"
// console.log(Array.from(name))

// console.log(typeof Infinity)

// const arr = Array.of(1,2,3)

//        // Adding and removing element in an array
// // arr.unshift(4,5)
// // arr.shift()
//        // concatenation in an array

// const arr2=Array.of(4,5,6)
// // const joinedArr=arr.concat(arr2)
//       // using spread operator
//       const joinedArr = [...arr,...arr2];

// // console.log(joinedArr);

// // -------------------------------------------------
// //Input array contain some elements.
// let array = [10, 20, 30, 40, 50];

// // Method (return element > 10).
// let found = array.find((element)=> {
// 	return element > 20;
// });

// // Printing desired values.
// console.log(found);

// console.log("karan".length+" the length of the word karan")

//for loops 
// let arr = [1,2,3,4,5]
// // FOR OF 
// for(let vals of arr)
// {
//     console.log(vals);
// }
// let obj = {
//     name:"karan",
//     office:"invansys",
//     gender:"male"
// }
// //FOR IN 
// for(let vals in obj){
//     console.log(vals+" : "+obj[vals])
// }

// MAP FILTER REDUCE IN JS
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let ans=[]
// let newarr = arr.map((ele, index, arr) => {
//     if (ele > 9) {
//         return ele
//     }
//     return NaN
// }).filter((ele)=>{
//  if(ele!==NaN){
//     return ele
//  }   
// })
// console.log(newarr)

// let arr=[1,2,3,4,5,6,7,8,9,10]
// let newarr=arr.reduce((acc,ele,arr)=>{
//     if(ele%2==0)
//     return acc+0;

//   return acc+ele;
// },0)
// console.log(newarr)

// array of objects

// function person(name , age)
// {
//     this.name=name;
//     this.age=age;
// }

// let obj1 = new person("karan",22);
// let obj2 = new person("amit",69);
// let obj3 = new person("aditya",21);
// let arr=[]
// arr.unshift(obj1);
// arr.unshift(obj2);
// arr.unshift(obj3);
// for(let i=0;i<3;i++){

//     console.log(`Data of person ${i+1}`)
//     for(let vals in arr[i])
//     {
//         console.log(vals+" -> "+arr[i][vals])
//     }
// }

// rest operator
// function foo(...vals)
// {
//     //vals becomes by default an array
//     console.log(vals[0])
//     // converting it to array again makes it a 2D array
//     let arr= Array.of(vals);
//     let arr2=[3,4,5,6,7,8];
//     arr.unshift(arr2);
//     for(let i=0;i<2;i++)
//     {
//         console.log(arr[i])
//     }
// }

//  foo(1,2,3,4,5)

//IFFE
// console.log((ele=>ele*ele)(5))


//creating object in different ways
// const obj = new Object();
// obj.name="Karan"
// obj.subject="computer science"
// obj.gender="M"
// console.log(obj)

//using create()
// const person={

//     getdetails: function(){
//         console.log(`${this.name} is ${this.gender} from ${this.city} from computer science`)
//     }
// }
// let obj2= Object.create(person)
// let obj1 = Object.create(person)

// obj1.gender="male"
// obj1.name="abhijeet"
// obj1.getdetails()

// obj2.name="karan"
// obj2.city="Delhi"
// obj2.gender="male"
// obj2.getdetails();
// let obj = {
//     car: "sedan",
//     types: {
//         ford: ['mustang', 'impala', 'land rover'],
//         maruti: ['alto', 'dezire', 'baleno'],
//     }
// }

// for (let vals in obj.types) {

//     for (let ele of obj.types[vals]) {
//         console.log(ele);
//     }
//     console.log();
// }

// for(let vals in obj.types){
//     console.log(typeof vals)
// }

// for(let vals of obj.types.ford)
// {
//     console.log(vals)
// }

// prototype and prototypal inheritance in js

// const person = function (name, courseCount) 
// {
//     this.name = name;
//     this.courseCount = courseCount;
//     this.getCourseCount = function () 
//     {
//         console.log(`course count is ${this.courseCount}`);
//     }
// }
// person.prototype.getFirstName= function(){
//     console.log(`the user name is ${this.name}`);
// }

// let obj1= new person("karan",2);
// let obj2 = new person("aditya",1);
// obj1.getCourseCount();
// obj1.getFirstName();

// let arr=[1,2,3,4,5,6,7]
// console.log()


// classes in js
// class A{
//     constructor(name,course)
//     {
//         this.name=name,
//         this.course=course
//     }

//     getdata(){
//         return `hello i ${this.name} enrolled to ${this.course}`;
//     }
// }

// let obj = new A("karan","MCA");
// let obj2 = new A("amit","BJMC");
// console.log(obj2.getdata())
// console.log(obj.getdata())


// console.log(y);
// var y=6;
// // let x;

// function abx(){
//     //.......
// }


//setTimeout by passing as parameter
// var x =setTimeout(hello, 3000,"hello world");
// function hello(val){
//     console.log(val)
// }
// // timeout clear karne ke liye
// // if(1){
// //     clearTimeout(x)
// // }
// let count=0;
// let x =setInterval(()=>{
//     if(count>1){
//         clearInterval(x)
//     }
// console.log(count++)
// },1000);
