// Standardized logger so all lines are consistent
const log = (n, msg) => console.log(`[#${n}] ${msg}`);

// ==============================
// Debug #1: Greeting Function
// ==============================
function greetUser(name) {
  // (Bug was case sensitivity; fixed)
  const greeting = `Greeting: Hello, ${name}`;
  log(1, greeting);
}
greetUser("Hallene");

// ==============================
// Debug #2: Array Indexing Issue
// ==============================
const numbers = [1, 2, 3];
// Buggy version would read numbers[3]; we log the correct one
log(2, `numbers[2] = ${numbers[2]}`);

// =============================================
// Debug #3: Math Logic Error (average)
// =============================================
const values = [10, 20, 30];
const total = values[0] + values[1] + values[2]; // 60

// Buggy
const avgBuggy = total / 4;
log(3, `Average (buggy) = ${avgBuggy}`);

// Fixed
const avgFixed = total / 3;
log(3, `Average (fixed) = ${avgFixed}`);

// =============================================
// Debug #4: Variable Scope Issue
// =============================================
let fixedMessage;
if (true) {
  fixedMessage = "Now I'm declared outside of the block.";
  log(4, `Inside block (fixed): ${fixedMessage}`);
}
log(4, `Outside block (fixed): ${fixedMessage}`);

// =============================================
// Debug #5: String + Number concatenation
// =============================================
const num1 = 10;
const num2 = "5";

// Buggy (concatenation)
const result = num1 + num2;
log(5, `Incorrect result = ${result}`);

// Fixed (coerce string to number)
const fixedResult = num1 + Number(num2);
log(5, `Correct result   = ${fixedResult}`);

