const word = new Promise((resolve, reject)=>{
    resolve("Hello")
})
word.then(res => {
    const b = res.split("")
    console.log(b);
    return b
    
})
    .then(res2 => res2.reverse())
    .then(res3 => res3.join(""))
    .then(res3 => console.log(res3))
   