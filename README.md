# JavaScript Debugging Demo

This is a simple JavaScript debugging project that showcases common errors and how to fix them. It includes short, focused examples to practice identifying and correcting issues in variable scope, data types, arithmetic operations and logic. 

---

## Current Tests

-  # bugs/bug1-offby-one.test.js:
  Checks for an off-by-one in a function that returns the first N items from the list.

-  # bugs/bug2-floatpoint.test.js:
  Validates floating-point addition with tolerance (0.1 + 0.2 ≈ 0.3).

-  # script.js:
  Runs the full script.js file and verifies expected console output.

---

## Future Additions/Improvements

- # Transition to Separate Test Files:
  The current 'script.js' will remain as a single file containing all existing bugs and
  fixes for quick review. Going forward, each new bug/fix will have:
  - Individual JS file containing the example.
  - Individual dedicated test file in the 'bugs/' folder. 
  
- # Expanded Coverage:
  Will continue adding tests for edge cases, error handling, and unusual inputs, especially
  for new features or logic changes.
  
---

## Files Included

- 'index.html' - Basic structure for testing JS in the browser.
- 'script.js' - Core file containing debugging examples and fixed versions.
- 'script.test.js' - Runs the entire 'script.js' file & verifies expected console output.
- 'bugs/bug1-offby-one.test.js' - Unit test for off-by-one error in returning first N items.
- 'bugs/bug2-floatpoint.test.js' - Unit test for floating-point addition tolerance.
- 'package.json' - Project metadata and dependencies.

---

## Skills Demonstrated

- JavaScript debugging & problem-solving.
- Writing unit tests with Jest.
- Identifying and fixing common bugs (logic errors, variable scope issues, data type errors).
- Organizing code for scalability and maintainability. 

---

## Work In Progress

This is an on-going project and will continue to grow as I add more examples and improve each debugging scenario. Stay tuned for updates!

## How to Run

You can view results by either:

- Opening 'index.html' in a browser (with the script linked).
- Running 'node script.js' in a terminal if you have Node.js installed.

---

Thanks for stopping by & exploring this project! 
