// Exercise 3: Countdown Timer
// Goal: print a countdown from 5 to 0, one number per second, using recursion + setTimeout.
// (no loops, no setInterval)
//
// Expected output:
//   5
//   4
//   3
//   2
//   1
//   0
//   Time's up!
//
// Run: node ex03.js

// write your code here
function repeat(times) {
if (times < 0) {
console.log("Time's up!");
return; // stop condition
}
console.log(String(times));
setTimeout(() => repeat(times - 1), 1000);
}
repeat(5);
// random delay between 500 and 1500 ms:
// const delay = 500 + Math.random() * 1000;