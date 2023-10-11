const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear-button");
const deleteButton = document.querySelector(".delete-button");
const displayBefore = document.querySelector(".display-before");
const displayEnd = document.querySelector(".display-end");

clearButton.addEventListener("click", () => {
  displayBefore.textContent = "";
  displayEnd.textContent = "";
});

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;

    if (displayEnd.textContent.length < 12) {
      displayEnd.textContent += buttonValue;
    }
  });
});

operators.forEach((button) => {
  button.addEventListener("click", () => {
    const operatorValue = button.textContent;

    if (displayEnd.textContent.length > 0) {
      displayBefore.textContent = displayEnd.textContent + operatorValue;
      displayEnd.textContent = "";
    }
  });
});
