const { add, subtract, multiply, divide } = require('./calculator');

// Test cases for the add function
test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('adds -1 + -1 to equal -2', () => {
  expect(add(-1, -1)).toBe(-2);
});

// Test cases for the subtract function
test('subtracts 5 - 3 to equal 2', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('subtracts 3 - 5 to equal -2', () => {
  expect(subtract(3, 5)).toBe(-2);
});

// Test cases for the multiply function
test('multiplies 4 * 6 to equal 24', () => {
  expect(multiply(4, 6)).toBe(24);
});

test('multiplies 5 * 0 to equal 0', () => {
  expect(multiply(5, 0)).toBe(0);
});

// Test cases for the divide function
test('divides 10 / 2 to equal 5', () => {
  expect(divide(10, 2)).toBe(5);
});

test('cannot divide by zero', () => {
  expect(divide(10, 0)).toBe("Cannot divide by zero");
});

// Test cases for error handling
test('adding non-numeric values throws error', () => {
  expect(() => add('a', 3)).toThrow(TypeError);
  expect(() => add(2, 'b')).toThrow(TypeError);
});
