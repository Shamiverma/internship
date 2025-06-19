const obj = {
    name: "shami",
    age : 20,
    isActive : true,
    address : {
        city : "delhi",
        state : "delhi",
        country: "india",

   },}
console.log(Object.keys(obj))

console.log(Object.values(obj))
console.log(Object.entries(obj).flat());
//assigning key value to the objects
let a = {a : 1, b: 2}
let b ={ c: 3, d: 4 };
let c = Object.assign(obj,a,b);
console.log(c)
console.log(Object.freeze(obj,a,b));
console.log(Object.isFrozen(obj));
//destructtring(destructure array elemnts)
let arr = [2,3,4];
let[w,x,y,z] = arr;
console.log(w,x,y,z);
//spread operator(...)
let user = {name : "Shami"};
const updatedUser ={...user , age : 20};
console.log(updatedUser)
