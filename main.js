const numBtn = document.querySelectorAll(".num-button");

const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");
const equalsBtn = document.getElementById("equals");

let displayText = document.getElementById("display-text");

let operand = "";
let currNum = 0;
let prevNum = 0;
let result = 0;

displayText.textContent = "0";

numBtn.forEach((num) => {
  num.addEventListener("click", () => {
    if (displayText.textContent === "0" || displayText.textContent === 0) {
      displayText.textContent = num.id;
    } else {
      displayText.textContent += num.id;
    }
  });
});

plusBtn.addEventListener("click", () => {
  if (prevNum === 0) {
    prevNum = parseInt(displayText.textContent);
    console.log(prevNum);
  }
  operand = "plus";
  displayText.textContent = "0";
});

minusBtn.addEventListener("click", () => {
  if (prevNum === 0) {
    prevNum = parseInt(displayText.textContent);
    console.log(prevNum);
  }
  operand = "minus";
  displayText.textContent = "0";
});

multiplyBtn.addEventListener("click", () => {
  if (prevNum === 0) {
    prevNum = parseInt(displayText.textContent);
    console.log(prevNum);
  }
  operand = "multiply";
  displayText.textContent = "0";
});

divideBtn.addEventListener("click", () => {
  if (prevNum === 0) {
    prevNum = parseInt(displayText.textContent);
    console.log(prevNum);
  }
  operand = "divide";
  displayText.textContent = "0";
});

equalsBtn.addEventListener("click", () => {
  currNum = parseInt(displayText.textContent);
  if (operand === "plus") {
    result = prevNum + currNum;
  } else if (operand === "minus") {
    result = prevNum - currNum;
  } else if (operand === "multiply") {
    result = prevNum * currNum;
  } else if (operand === "divide") {
    result = prevNum / currNum;
  }
  displayText.textContent = result;
  prevNum = result;
});
