function soma(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid parameters');
  }
  return a + b;
}

module.exports = { soma };
