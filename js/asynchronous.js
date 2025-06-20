setTimeout(() => {
console.log("Hello shami , this is asynchronous message ")
}, 2000);



let repeatTask = setInterval(() => {
console.log("Hello shami , this is asynchronous message ")
}, 2000);
console.log("after set timeout and set interval")
clearInterval(repeatTask);

