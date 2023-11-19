const p = new Promise((res,rej)=>{
    setTimeout(()=>{
        res("niggas in paris")
    },3000)
})

const p2 = new Promise((res,rej)=>{
    setTimeout(()=>{
        rej("prakashIndeepDODO in paris")
    },1000)
})

const p3 = new Promise((res,rej)=>{
    setTimeout(()=>{
  res("Xie piao piao")
    },2000)
})

Promise.race([p,p2,p3]).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(typeof err);
})

// async function disp(){
// //     p.then((res)=>{
// //    console.log(res);
// //     })

// const ans2 = await p2;
// console.log(ans2);

// const ans = await p;
// console.log(ans);

// console.log("Hello world")
// }


// disp();