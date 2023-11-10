// the below code explains classes and objects and the
// use of getters and setters method , use of constructors

// class Person{
//     constructor(name,gender)
//     {
//         this.name=name
//         this.gender=gender
//     }
//     get getInfo(){
//         return `${this.name} has gender ${this.gender}`
//     }
//     set setName(newName)
//     {
//         if(this.name===newName){
//             console.log("User havent changed name!!")
//             return;
//         }
//         else{
//            this.name=newName;
//         }
//     }

// }
// let user = new Person("bhavesh","Male");
// // console.log(user.getInfo)
// //user.setName ="bhavesh"

// inheritance and super keyword use

class Teacher {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }
  get getInfo() {
    return `${this.name} teaches this ${this.subject}`;
  }
}
class Student extends Teacher {
  constructor(name , subject) 
  {
    super();
    this.name=name;
    this.subject = subject;
  }
  show(){
    return this.getInfo
  }
}

let user = new Student("karan","maths");
console.log(user.show())