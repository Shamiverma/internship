const arr = [1, 2, 3, 4, 5];
console.log(arr);
const arr2 = new Array(1,2,3,4,5,6,7,8,9,10);
console.log(arr2);
console.log(arr.length);
// console.log(arr2.push(10),arr2);
// console.log(arr2.pop(),arr2);
// console.log(arr2.unshift(0),arr2);
// console.log(arr2.shift(),arr2);
console.log(arr2.includes(5));
let ispresent = arr2.includes(5);
console.log(ispresent);
console.log(arr2.lastIndexOf(4));
const obj = {}
console.log(obj);
const user = [{
    id:1,
    name:"shami"
},{
    id:2,
    name: "Manish"
},{
    id:3,
    name: "Ashutosh"
},{
    id:4,
    name: "Saurabh"
}];
console.log(user);
const findOut = user.find((shami) => shami.name=== "Manish")
console.log(findOut);

const forEachLoop = arr2.forEach((elem) => console.log(elem*2));

//arr2.sort()
console.log(arr2.sort(),arr2)


