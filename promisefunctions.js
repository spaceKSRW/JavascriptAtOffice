
let p1 = new Promise((res,rej)=>{
    setTimeout(()=>{
        rej("Promise 1 rejected")
    },3000)
});
let p2 = new Promise((res,rej)=>{
    setTimeout(()=>{
        rej("Promise 2 rejected")
    },3000)
});
let p3 = new Promise((res,rej)=>{
    setTimeout(()=>{
        rej("Promise 3 rejected")
    },3000)
});

Promise.any([p1,p2,p3]).then((res)=>{
console.log(res)
}).catch((err)=>{
    console.error(err.errors[0]);
})