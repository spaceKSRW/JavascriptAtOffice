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

function createObject(name,gender,city)
{
    console.log(this);
   let obj={}
   obj.name=name;
   obj.city=city;
   obj.gender=gender;
   return obj;
}

let obj = createObject("karan","M","Delhi")
let obj2 =  createObject("ayush","T","Deheradun");
// console.log(obj)

// NOW CREATING A CONSTRUCTOR FUNCTION

// function abc(name , gender , pronoun)
// {
  
//     this.name=name;
//     this.gender=gender;
//     this.pronoun=pronoun;
//     console.log("hello "+ this);
// }

// let obj= new abc("Karan","M","He/She");
// // console.log(obj)