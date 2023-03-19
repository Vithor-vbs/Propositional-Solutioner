function isWellFormed(formula) {
  const stack = [];
  for (let i = 0; i < formula.length; i++) {
    const c = formula[i];
    if (c === "(") {
      stack.push(c);
    } else if (c === ")") {
      if (stack.length === 0 || stack.pop() !== "(") {
        return false;
      }
    } else if (/[A-Z]/.test(c)) {
      // Check that the next character is not also a letter or number.
      const nextChar = formula[i + 1];
      if (nextChar && /\w/.test(nextChar)) {
        return false;
      }
    } else if (/[~v^\-\\><]/.test(c)) {
      // The character is a valid logical operator.
    } else if (!/[ \t\n\r\f]/.test(c)) {
      // The character is not whitespace or a letter/number.
      return false;
    }
  }
  return stack.length === 0;
}

console.log(isWellFormed("(P -> Q) ^ (P v Q)"));
console.log(isWellFormed("A ^ B -> (B v C)"));
