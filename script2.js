document.querySelector("#grandparent")
.addEventListener('click',()=>{
    console.log("Grandparent clicked");
},true);

document.getElementById("parent")
.addEventListener('click',()=>{
    console.log("Parent clicked")
},true);

document.getElementById("child")
.addEventListener('click',()=>{
    console.log("Child Clicked")
},true); 