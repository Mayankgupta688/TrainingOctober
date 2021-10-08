// JavaScript is single threaded...

var userName = "Mayank";

setTimeout(function() {
    console.log(1); // 10 Seconds
    debugger; 
}, 10000) 

setTimeout(function() {
    console.log(2); // 12 or 22 Seconda
    debugger;
}, 12000) 

setTimeout(function() {
    console.log(3); // 15, 37 Seconds
    debugger;
}, 15000) 

console.log("My Name is: " + userName)

debugger;