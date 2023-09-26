// global variables
let firstNumber = "";
let secondNumber = "";
let operator = "";

//query selectors
const numberButtons = Array.from(document.querySelectorAll(".number"));
const operatorButtons = Array.from(document.querySelectorAll(".operator"));
const calculationString = document.querySelector(".calculation-string");
const resultString = document.querySelector(".calculation-result-string");

//event listeners
numberButtons.forEach(btn =>
  btn.addEventListener("click", e => {
    numberButtonHandler(e);
    updateDisplay();
  })
);

operatorButtons.forEach(btn =>
  btn.addEventListener("click", e => {
    operatorButtonHandler(e);
    if (btn.textContent !== "=") {
      updateDisplay();
    }
  })
);

//functions
function numberButtonHandler(e) {
  if (!operator) {
    firstNumber = firstNumber.concat(e.target.textContent);
  } else {
    secondNumber = secondNumber.concat(e.target.textContent);
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
      if (!operator && firstNumber) {
        operator = currentOperation;
      }

      break;

    case ".":
      if (!operator && !firstNumber.includes(".")) {
        firstNumber = firstNumber.concat(".");
      }
      if (operator && !secondNumber.includes(".")) {
        secondNumber = secondNumber.concat(".");
      }
      break;

    case "+/-":
      if (!operator) {
        firstNumber = (parseFloat(firstNumber) * -1).toString();
      } else {
        secondNumber = (parseFloat(secondNumber) * -1).toString();
      }
      break;

    case "C":
      if (firstNumber && !operator && !secondNumber) {
        firstNumber = firstNumber.slice(0, -1);
      } else if (firstNumber && operator && !secondNumber) {
        operator = operator.slice(0, -1);
      } else if (firstNumber && operator && secondNumber) {
        secondNumber = secondNumber.slice(0, -1);
      }
      break;

    case "AC":
      firstNumber = "";
      secondNumber = "";
      operator = "";
      updateResultString(0);
      break;

    case "=":
      if (firstNumber && operator && secondNumber) {
        const result = calculate(firstNumber, operator, secondNumber);

        firstNumber = updateResultString(result);
        operator = "";
        secondNumber = "";
      }
      break;

    default:
      break;
  }
}

function updateDisplay() {
  calculationString.textContent = `${firstNumber} ${operator} ${secondNumber}`;
}

function updateResultString(result) {
  if (typeof result == "number") {
    const roundedResult = result.toFixed(12);
    const formattedRoundedResult = roundedResult
      .toString()
      .replace(/\.?0+$/, "");
    resultString.textContent = `${formattedRoundedResult}`;
    return formattedRoundedResult;
  } else {
    resultString.textContent = `${result}`;
    return "";
  }
}

function calculate(firstNumber, operator, secondNumber) {
  switch (operator) {
    case "+":
      return +firstNumber + +secondNumber;

    case "-":
      return +firstNumber - +secondNumber;

    case "*":
      return +firstNumber * +secondNumber;

    case "/":
      if (secondNumber === "0") {
        return "NaN";
      } else {
        return +firstNumber / +secondNumber;
      }
    case "^":
      return (+firstNumber) ** +secondNumber;

    default:
      break;
  }
}
