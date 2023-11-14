// the below code explains classes and objects and the
// use of getters and setters method , use of constructors

const { compact } = require("lodash");

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

// class Teacher {
//   constructor(name, subject) {
//     this.name = name;
//     this.subject = subject;
//   }
//   get getInfo() {
//     return `${this.name} teaches this ${this.subject}`;
//   }
// }
// class Student extends Teacher {
//   constructor(name , subject) 
//   {
//     super();
//     this.name=name;
//     this.subject = subject;
//   }
//   show(){
//     return this.getInfo
//   }
// }

// let user = new Student("karan","maths");
// console.log(user.show())

// function bankAccount(name)
// {
//   this.name=name;
//   this.accno=Date.now()
// }

// const user1 = new bankAccount("karan");
// console.log(user1)

// bankAccount.prototype.fetchDetails=function(){
//   console.log(`${this.name} has moneyyyy $$$ `)
// }
// user1.fetchDetails();

// class BankAccount{
//   customerName;
//   accountNumber=Date.now();
//   #balance=0;  // private field

//   constructor(customerName)
//   {
//     this.customerName=customerName;
//     this.accountNumber=Date.now();
    
//   }
//   setBalance(amount)
//   {
//     this.#balance=amount;
//   }
//   deposit(amount){
//    this.#balance+=amount;
//   }
//   withdraw(amount)
//   {
//     this.#balance-=amount;
//   }
//   showDetails(){
//     return `${this.accountNumber} has name ${this.customerName} having balance ${this.#balance}`;
//   }
// }

// class currentAccount extends BankAccount{
//   transactionLimit=50000;
//   constructor(customerName)
//   {
//     super(customerName);
//   }
//   takeBusinessLoan(amount)
//   {
//     console.log("taking business loan "+amount);
//   }
// }

// class savingsAccount extends BankAccount{
//   transactionLimit=10000;
//   #id=90  // private field
//   constructor(customerName,balance=0)
//   {
//     super(customerName);
//   }
//   takePersonalLoan(amount)
//   {
//     console.log("taking personal loan "+amount);
//   }
// }
// let user=  new savingsAccount("karan",10000)

// user.deposit(123232);
// user.setBalance(1000000);
// console.log(user.showDetails())

class User{
  static id={
    val:1,
  }
  
  constructor(age,name)
  {
    this.name=name;
    this.age=age;
  }
  static compareByAge(ob1,ob2)
  {
    return ob1.age-ob2.age;
   }

   static incrementID(){
    console.log(this.id)
   }
}

const u1 = new User(34,"karan")
const u2 = new User(35,"jane doe")
const u3 = new User(21,"taylor");
const users = [u1,u2,u3];
User.id.val++;
User.incrementID(); // static method accessing static property

User.id.val++
User.incrementID()



users.sort(User.compareByAge)
console.log(users)

