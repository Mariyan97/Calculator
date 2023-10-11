const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear-button");
const deleteButton = document.querySelector(".delete-button");
const displayBefore = document.querySelector(".display-before");
const displayEnd = document.querySelector(".display-end");
const calculateButton = document.querySelector(".calculate");

let currentExpression = "";

clearButton.addEventListener("click", () => {
  clearDisplay();
});

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    handleNumberClick(button.textContent);
  });
});

operators.forEach((button) => {
  button.addEventListener("click", () => {
    handleOperatorClick(button.textContent);
  });
});

deleteButton.addEventListener("click", () => {
  handleDelete();
});

calculateButton.addEventListener("click", () => {
  calculateResult();
});

function clearDisplay() {
  displayBefore.textContent = "";
  displayEnd.textContent = "";
  currentExpression = "";
}

function handleNumberClick(value) {
  if (displayEnd.textContent.length < 12) {
    displayEnd.textContent += value;
    currentExpression += value;
  }
}

function handleOperatorClick(operator) {
  decimalEntered = false;
  if (displayEnd.textContent.length > 0) {
    displayBefore.textContent = displayEnd.textContent + " " + operator;
    displayEnd.textContent = "";
    currentExpression += " " + operator + " ";
  }
}

function calculateResult() {
  try {
    const result = calculateExpression(currentExpression);
    displayEnd.textContent = result;
  } catch (error) {
    displayEnd.textContent = "Error";
  }
}

function handleDelete() {
  if (displayEnd.textContent.length > 0) {
    displayEnd.textContent = displayEnd.textContent.slice(0, -1);
    currentExpression = currentExpression.slice(0, -1);
  }
}

function calculateExpression(expression) {
  const tokens = expression.split(" ");
  let result = parseFloat(tokens[0]);

  for (let i = 1; i < tokens.length; i += 2) {
    const operator = tokens[i];
    const operand = parseFloat(tokens[i + 1]);

    if (operator === "+") {
      result += operand;
    } else if (operator === "-") {
      result -= operand;
    } else if (operator === "*") {
      result *= operand;
    } else if (operator === "/") {
      if (operand === 0) {
        throw new Error("Division by zero");
      }
      result /= operand;
    }
  }

  return result;
}
