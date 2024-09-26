function calc(...args) {
  let tokens = args;
  const afterMultDiv = [];

  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === "*") {
      const left = afterMultDiv.pop();
      const right = tokens[++i];
      afterMultDiv.push(left * right);
    } else if (tokens[i] === "/") {
      const left = afterMultDiv.pop();
      const right = tokens[++i];
      if (right === 0) throw new Error("Division by zero");
      afterMultDiv.push(left / right);
    } else {
      afterMultDiv.push(tokens[i]);
    }
  }
  let result = afterMultDiv[0];
  for (let i = 1; i < afterMultDiv.length; i += 2) {
    const operator = afterMultDiv[i];
    const next = afterMultDiv[i + 1];
    if (operator === "+") {
      result += next;
    } else if (operator === "-") {
      result -= next;
    }
  }
  return result;
}

module.exports = calc;
