const fastPromise = new Promise(resolve =>{
    setTimeout(() => {
        resolve("fast")
    }, 500);
})

const slowPromise = new Promise(resolve =>{
    setTimeout(() => {
        resolve("slow")
    }, 2000);
})

Promise.race([fastPromise,slowPromise]).then(result=> {
    console.log(result);
    
})