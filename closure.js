function init(){
    let name="mozilla"
    function displayName(){
        console.log(name);
    }
    return displayName
}
const myFunc = init();

myFunc();

// console.log(name)