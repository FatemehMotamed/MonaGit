const a=new Promise((resolve,reject)=>{
    setTimeout(() => {
    console.log(1)
    resolve("success");
}, 1000);
});

a.then((response)=>{
    console.log(2)
    console.log(response)
})
a.catch((response)=>{
 console.log(response)
})
