const fruits = ["apple", "banana", "apple", "apple", "banana"]

const count = fruits.reduce((numbers, item)=>{
    numbers[item] = (numbers[item] || 0)+1;
    return numbers
},{})
 

console.log(count);
