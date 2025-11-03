const p1 = new Promise((resolve)=>resolve(10))
const p2 = new Promise((resolve)=>{
    setTimeout(()=> resolve(20), 1000)
})
const p3 = fetch("https://jsonplaceholder.typicode.com/posts/1").then(
    res =>res.json()
)
Promise.all([p1,p2,p3]).then(result=>{
    console.log(result[0]);
    console.log(result[1]);
    console.log(result[2]);
    
}).catch(error=>{
    console.error("faild one promise", error)
    console.log("************");
    
})