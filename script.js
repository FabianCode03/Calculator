// global variables
let firstNumber = "";
let secondNumber = "";
let operator = "";

//query selectors
const numberButtons = Array.from(document.querySelectorAll(".number"));
const operatorButtons = Array.from(document.querySelectorAll(".operator"));

//event listeners
numberButtons.forEach(btn =>
  btn.addEventListener("click", e => numberButtonHandler(e))
);

operatorButtons.forEach(btn =>
  btn.addEventListener("click", e => operatorButtonHandler(e))
);

//functions
function numberButtonHandler(e) {
  if (!operator) {
    firstNumber = firstNumber.concat(e.target.textContent);
    console.log("first", firstNumber);
  } else {
    secondNumber = secondNumber.concat(e.target.textContent);
    console.log("second", secondNumber);
  }
}

function operatorButtonHandler(e) {
  const currentOperation = e.target.textContent;

  switch (currentOperation) {
    case "+":
    case "-":
    case "*":
    case "/":
    case "^":
      operator = currentOperation;
      console.log("operator", operator);
      break;

    case ".":
      if (!operator && !firstNumber.includes(".")) {
        firstNumber = firstNumber.concat(".");
        console.log("first", firstNumber);
      }
      if (operator && !secondNumber.includes(".")) {
        secondNumber = secondNumber.concat(".");
        console.log("second", secondNumber);
      }
      break;
    default:
      break;
  }
}
