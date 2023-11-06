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

function consfunc(name, gender , city,marks)
{
    this.name=name
    this.gender=gender
    this.city=city
    this.marks=marks
    console.log(this)
    this.changeMarks = function(){
        this.marks+=100
    }
}
function teacher(stud)
{
    stud.changeMarks()
}
let obj = new consfunc("Karan","M","Delhi",90)
teacher.call(this,obj)
console.log(obj)