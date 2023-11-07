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

let obj = {
    name: "Karan",
    address: {
        city: "Delhi"
    },
    greet: function(){
        console.log(`${this.name} is form ${this.address.city}`);
    },
    date : new Date() 
}

//let newobj = { ...obj }  // shallow copy
// let newobj = Object.assign({},obj) // another technique
// newobj.name = "amit"
// newobj.address.city ="UK"
// console.log(obj.address.city + " " + newobj.address.city) // shallow copy , dono pe reflect hua 

// deep copy

// 1st method : using JSON.stringify , JSON.parse

let newobj = JSON.parse(JSON.stringify(obj));


newobj.address.city = "Goa"
console.log(newobj)
console.log(obj)



