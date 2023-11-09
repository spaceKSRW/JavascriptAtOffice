let obj = {
  first_name: "karan",
  last_name: "rawat",
};

let printName = function (city,state) {
  console.log(
    `my name is ${this.first_name} ${this.last_name} my city is ${city} which is from state ${state}`
  );
};

// let ans = printName.bind(obj)
// ans()
 
Function.prototype.mybind = function (...args) {
  let obj = this;
  let vals = args.slice(1);
  return function (...args2) {
    obj.apply(args[0],[...vals,...args2]);
  };
};

let polyfill = printName.mybind(obj, "Ramnagar");
polyfill("Uttrakhand");
