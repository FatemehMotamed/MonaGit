const numbers = [10,5,25,8,30,15]
const max = numbers.reduce((max_num, item)=>{
    return item>max_num ? item : max_num
},numbers[0])

console.log(max);
