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
      return a / b;
      break;
  }
}

module.exports = calc;
