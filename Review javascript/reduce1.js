const numbers = [1,4,6,8,10]
const sum = numbers.reduce((total, item)=>{
    return total+item
},0)
console.log(sum)