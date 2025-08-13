// script.test.js — runs the whole script.js and asserts the console output

let logs = [];
const capture = (...args) => logs.push(args.join(' '));

beforeEach(() => {
  logs = [];
  jest.spyOn(console, 'log').mockImplementation(capture);
});

afterEach(() => {
  console.log.mockRestore();
  // Allow requiring script.js again in future tests
  delete require.cache[require.resolve('./script.js')];
});

// Helper: assert that some logged line contains a substring
const expectLogToContain = (substr) =>
  expect(logs.some((l) => l.includes(substr))).toBe(true);

test('script.js runs and prints the expected messages', () => {
  require('./script.js'); // executes your script top-to-bottom

  // Debug #1
  expectLogToContain('Greeting: Hello, Hallene');

  // Debug #2
  expectLogToContain('numbers[2] = 3');

  // Debug #3
  expectLogToContain('Average (buggy) = 15');
  expectLogToContain('Average (fixed) = 20');

  // Debug #4
  expectLogToContain("Inside block (fixed): Now I'm declared outside of the block.");
  expectLogToContain("Outside block (fixed): Now I'm declared outside of the block.");

  // Debug #5
  expectLogToContain('Incorrect result = 105');
  expectLogToContain('Correct result   = 15');
});
