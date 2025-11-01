const info = {
    name:"Mona",
    age:39,
    address:{
        city: "tehran",
        street: "niavaran",
    }
}

// console.log(info.address.city);
const {
    name,
    address:{city, street},
    age
} = info

console.log(city);

