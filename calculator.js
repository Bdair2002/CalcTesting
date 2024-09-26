function calc(...args) {
  const validOperators = ["+", "-", "*", "/"];
  let tokens = [];

  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === "number") {
      tokens.push(args[i]);
    } else if (typeof args[i] === "string") {
      if (!isNaN(Number(args[i]))) throw new Error("Invalid input type");
      if (!validOperators.includes(args[i]))
        throw new Error("Invalid operator");
      else tokens.push(args[i]);
    }
    if (
      typeof tokens[tokens.length - 1] === "string" &&
      typeof tokens[tokens.length - 2] === "string"
    )
      throw new Error("Invalid operator order");
  }
  const afterMultDiv = [];

  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === "*") {
      let left = afterMultDiv.pop();
      left = left > 1000 ? 1 : left;
      let right = tokens[++i];
      right = right > 1000 ? 1 : right;
      afterMultDiv.push(left * right);
    } else if (tokens[i] === "/") {
      let left = afterMultDiv.pop();
      left = left > 1000 ? 1 : left;
      let right = tokens[++i];
      right = right > 1000 ? 1 : right;
      if (right === 0) throw new Error("Division by zero");
      afterMultDiv.push(left / right);
    } else {
      afterMultDiv.push(tokens[i]);
    }
  }
  let result = afterMultDiv[0] > 1000 ? 0 : afterMultDiv[0];

  for (let i = 1; i < afterMultDiv.length; i += 2) {
    const operator = afterMultDiv[i];
    const next = afterMultDiv[i + 1] > 1000 ? 0 : afterMultDiv[1 + i];
    if (operator === "+") {
      result += next;
    } else if (operator === "-") {
      result -= next;
    }
  }
  return result;
}

module.exports = calc;
