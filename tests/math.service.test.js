const { soma } = require('../src/services/math.service');

test('should sum two numbers', () => {
  expect(soma(2, 3)).toBe(5);
});

test('should throw error if params are invalid', () => {
  expect(() => soma('a', 2)).toThrow();
});
