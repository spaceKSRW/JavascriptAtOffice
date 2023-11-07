const _ = require("lodash");
// var myObj = {
//     name:"karan",
//     age:22,
//     gender:"M",
//     address :{
//         street:"Southex",
//         city:"Delhi",
//         pincode:110023,
//         country:"India"
//     }
// };

// // console.log(myObj["address"]["street"]) one way to describe the object
// for(let vals in myObj){
//     if(typeof myObj[vals] == "object")
//     {

//         for(let data in myObj[vals]){

//             console.log(data+" -> "+myObj[vals][data])
//         }
//     }
// }

// CREATING A FUNCTION WHICH RETURNS OBJECT

// function createObject(name,gender,city)
// {
//     console.log(this); // global object
//    let obj={}
//    obj.name=name;
//    obj.city=city;
//    obj.gender=gender;
//    return obj;
// }

// let obj = createObject("karan","M","Delhi")
// let obj2 =  createObject("ayush","T","Deheradun");
// console.log(obj)

// NOW CREATING A CONSTRUCTOR FUNCTION

// function abc(name , gender , pronoun)
// {

//     this.name=name;
//     this.gender=gender;
//     this.pronoun=pronoun;
//     console.log(this);
// }

// let obj= new abc("Karan","M","He/She");

// function consfunc(name, gender , city,marks)
// {
//     this.name=name
//     this.gender=gender
//     this.city=city
//     this.marks=marks
//     console.log(this)
//     this.changeMarks = function(){
//         this.marks+=100
//     }
// }
// function teacher(stud)
// {
//     stud.changeMarks()
// }
// let obj = new consfunc("Karan","M","Delhi",90)
// teacher.call(this,obj)
// console.log(obj)

//PROTOTYPE IN JS
// function foo(){
// return 0
// }

// console.log(foo.prototype)

// let obj = {
//     name: "karan",
// }
// obj.__proto__.greet = function () {
//     console.log(`${obj.name} says hello from node environment`)
// }

// // obj.greet()

// obj.__proto__.meet = function () {
//     console.log(`${obj.name} is busy right now`)
// }
// obj.meet()
// function Employee(name)
// {
//     this.name=name
// }
// let obj={
//     name:"jaran",
//     printName:function(){
//         console.log(this.name);
//     }

// }
// let user = Object.create(obj);
// user.printName()

// function Employee(){
//     //...
// }'

// let obj = {
//     name: "Karan",
//     address: {
//         city: "Delhi"
//     },
//     greet: function(){
//         console.log(`${this.name} is form ${this.address.city}`);
//     },
//     date : new Date()
// }

//let newobj = { ...obj }  // shallow copy
// let newobj = Object.assign({},obj) // another technique
// newobj.name = "amit"
// newobj.address.city ="UK"
// console.log(obj.address.city + " " + newobj.address.city) // shallow copy , dono pe reflect hua

// raddi method

// 1st method : using JSON.stringify , JSON.parse
// let newobj = JSON.parse(JSON.stringify(obj));
// newobj.address.city = "Goa"
// console.log(newobj)
// console.log(obj)

// deep copy

// let newob = _.cloneDeep(obj)

// console.log(newob)

// function solve(ele) {

//     let arr2 = []
//     for (let i = 0; i < 4; i++) {
//         arr2.push(ele[i].age);
//     }

//     return arr2;
// }

// const obj = function (name, age) {
//     this.name = name
//     this.age = age
// }

// let ob1 = new obj("A", 12);
// let ob2 = new obj("B", 23);
// let ob3 = new obj("C", 2);
// let ob4 = new obj("D", 3);
// let arr = [ob1, ob2, ob3, ob4]

// let ans = solve(arr);
// console.log(ans)
// let ans2= arr.map((ele ,index ,arr)=>{
//     return ele["name"];
// })

// console.log(ans2);

// function solve(arr) {
//     let obj = {

//         avg: 0,
//         sum: 0,
//         min: 0,
//         max: 0,
//     }
//     let ans = 0;
//     let ans2 = Number.MAX_VALUE;
//     let ans3 = Number.MIN_VALUE;
//     let ans4 = 0;
//     for (let i = 0; i < arr.length; i++) {
//         ans += arr[i];
//         ans2 = Math.min(ans2, arr[i]);
//         ans3 = Math.max(ans3, arr[i]);
//         ans4 += arr[i];
//     }
//     ans = ans / arr.length;
//     obj.avg = ans;
//     obj.sum=ans4;
//     obj.min=ans2;
//     obj.max=ans3;
//     return obj;

// }

// let arr = [1, 2, 3, 4, 5, 6];
// let ans = solve(arr);
// console.log(ans)

// Lodash

//getting elements
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(_.first(numbers)) // first element
// console.log(_.last(numbers)) // last element

// console.log(_.nth(numbers,8))

// // chunks of array

// const chunk = _.chunk(numbers , 3) // 3-3 ka array bana dega
// console.log(chunk)

// 2 array mai difference

// const diff = _.difference(numbers,[1,2,3,4,5]) // difference bata dega
// console.log(diff)

// drop : shuru se kitne elements delete karna hai

// const dropped = _.drop(numbers,3) // shuru ke 3 elements delete ho jayenge
// console.log(dropped)

// take : uthtana
// const take = _.drop(numbers,3) // shuru ke 3 elements uthana
// console.log(take);

// const filler = _.fill(["a", "b", "c"], 0, 0, 1); // array , jo value fill akrni hai , start index , end index
// console.log(filler);

// //alternate method

//  const filled = _.fill(new Array(100), 34);
// console.log(filled);

//flatten the array

// const jagged = [1, [2, 3], [4, 5, 6], [7], [8, [9, 10]]];
// const flat = _.flatten(jagged); // ye ek level pe flat karega
// console.log(flat);
// const fd = _.flattenDeep(jagged) // ye pura flat kardega

//union of array
// const c=[1,2,3,4]
// const d = [3,4,6,7,8]
// const unionarr = _.union(c,d)
// console.log(unionarr); //union result dega

const objs = [
  {
    id: 1,
    first_name: "Gus",
    last_name: "Fring",
    gender: "Male",
    salary: 1000000,
  },
  {
    id: 2,
    first_name: "Marie",
    last_name: "Schradder",
    gender: "Female",
    salary: 10000,
  },
  {
    id: 3,
    first_name: "ASAC",
    last_name: "Schradder",
    gender: "Male",
    salary: 80000,
  },
  {
    id: 4,
    first_name: "Skyler",
    last_name: "White",
    gender: "Female",
    salary: 30000,
  },
  {
    id: 5,
    first_name: "Walter",
    last_name: "White",
    gender: "Male",
    salary: 500000,
  },
];
// returns an object, jisme gender ki frequency count de rakhi hogi
// const getRatio = _.countBy(objs,'gender')
// console.log(typeof getRatio)

// ye objects ko group kar deta hai
// const getGrouped = _.groupBy(objs,'gender');
// console.log(getGrouped)

//orderBy

// const order = _.orderBy(objs,"salary","desc")
// console.log(order)

// // // now getting the objects of top 3 salary
// console.log("-------------------------")
// const top3 = _.take(order,3)
// console.log(top3)
// console.log("-------------------------")
// // // now getting the names of top 3 salary wale using map

// const names = _.map(top3,"first_name")
// console.log(names);

// // now getting total salary of female , and male

// const totalSalary = _.reduce(objs,(acc,ele)=>{
//   return ele.salary+acc;
// },0)
// console.log(totalSalary);

// grouping by gender and getting the salary sum

let groupByGender = _.groupBy(objs, "gender");

// console.log(groupByGender); // group by returns an object containing objects having list of objects

let totalSalaryByGender = _.map(groupByGender, (grp) => {
  return _.reduce(
    grp,
    (acc, ele) => {
      return ele.salary + acc;
    },
    0
  );
});

console.log(totalSalaryByGender);
