function calc(a, operator, b) {
  switch (operator) {
    case "+":
      return a + b;
      break;

    case "-":
      return a - b;
      break;

    case "*":
      return a * b;
      break;

    case "/":
      if (b === 0) throw new Error("Division by zero");
      return a / b;
      break;
  }
}

module.exports = calc;
