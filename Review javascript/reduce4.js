const scores = [85,90,78,92,88]
const average = scores.reduce((sum,item,index,array)=>{
    sum +=item
    if (index === array.length - 1){
        return sum/array.length
    }
    console.log(sum);
    
    return sum
},0)
console.log(average);
