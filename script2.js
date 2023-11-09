document.querySelector("#grandparent")
.addEventListener('click',()=>{
    console.log("Grandparent clicked");
},false);

document.getElementById("parent")
.addEventListener('click',()=>{
    console.log("Parent clicked")
},false);

document.getElementById("child")
.addEventListener('click',(e)=>{
    console.log("Child Clicked")
    e.stopPropagation();
},false); 
document.getElementById("papa")
.addEventListener('click',()=>{
    console.log("Papa Clicked")
},false); 