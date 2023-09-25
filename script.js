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

function operatorButtonHandler(e) {}
