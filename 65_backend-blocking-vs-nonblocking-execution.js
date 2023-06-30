// Synchronous or blocking
// =>line by line execution
// 
// Asynchronous or non-blocking
// =>line by line execution not gauranteed
// =>callbacks will fire

const fs = require("fs");
let text = fs.readFile("op.txt","utf-8",(err, data)=>{
    console.log(data);
});
console.log("This is a message");