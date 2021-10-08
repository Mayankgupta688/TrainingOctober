// JavaScript is single threaded execution model.

// http://latentflip.com/loupe/?code=c2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoK!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

var userName = "Mayank";

setTimeout(function func1() {
    console.log(1); // 10 Seconds
}, 10000) 

setTimeout(function func2() {
    console.log(2); // 12 or 22 Seconda
}, 10000) 

setTimeout(function func3() {
    console.log(3); // 15, 37 Seconds
}, 10000) 

setTimeout(function func4() {
    console.log(1); // 10 Seconds
}, 10000) 

setTimeout(function func5() {
    console.log(2); // 12 or 22 Seconda
}, 10000) 

setTimeout(function func6() {
    console.log(3); // 15, 37 Seconds
}, 10000) 

console.log("My Name is: " + userName)
