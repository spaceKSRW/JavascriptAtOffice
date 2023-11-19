class User{
    name;
    age;
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    display(){
        return `${this.name} and ${this.age}`;
    }
    set infoName(name)
    {
        this.name=name;
    }
    set infoAge(age)
    {
        this.age=age;
    }
}

const u1 = new User("karan",78);
u1.infoName="sumit";

let faketaxi=90;
console.log(faketaxi instanceof User)