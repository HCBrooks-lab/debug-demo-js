// ==============================
// Debug #1: Greeting Function
// Description: Fixes a case-sensitive typo (Name vs name). 
// ==============================

function greetUser(name) {
    let greeting = "Hello, " + name; // Original Line let greeting = "Hello, " + Name;
    console.log(greeting);
}
greetUser("Hallene");



// ==============================
// Debug #2: Array Indexing Issue
// Description: Demonstrates an 'undefined' output from out-of-bounds index.
// ==============================

let numbers = [1, 2, 3];
console.log(numbers[2]); // Buggy Version console.log(numbers[3]); out-of-bounds, and returns 'undefined'. 



// =============================================
// Debug #3: Math Logic Error
// Description: Incorrectly calculates average due to wrong divisor.
// =============================================

let values = [10, 20, 30];
let total = values[0] + values[1] + values[2]; // 10 + 20 + 30 = 60
let average = total / 4; // dividing by 4 instead of 3
console.log("Average:", average); // Expecting 20, but logs 15.
// ---------------------------------------------
// Fixed Version
let correctAverage = total / 3; // dividing by 3 values
console.log("Correct Average:", correctAverage); // Logs 20



// =============================================
// Debug #4: Variable Scope Issue
// Description: Variable declared inside block is inaccessible outside the block. 
// =============================================

if (true) {
    let scopedMessage = "I'm only accessible in this block.";
    console.log("Inside block:", scopedMessage); // This will work, scopedMessage is accessible. 
}
// ---------------------------------------------
// Fixed Version
let fixedMessage; 
if (true) {
    fixedMessage = "Now I'm declared outside of the block.";
    console.log("Inside block (fixed):", fixedMessage);
}
console.log("Outside block (fixed):", fixedMessage); // No error



// =============================================
// Debug #5: String Concatenation Bug
// Description: Adding a number to a string results in concatenation, not addition. 
// =============================================

let num1 = 10;
let num2 = "5"; // num2 is a string vs a number. 

let result = num1 + num2;
console.log("Incorrect result", result); // Logs "105" instead of 15. 
// ---------------------------------------------
// Fixed Version
let fixedResult = num1 + Number(num2); // Converting string to number. 
console.log("Correct Result:", fixedResult);     