const numBtn = document.querySelectorAll(".num-button");
const equalsBtn = document.getElementById("equals");
const resetBtn = document.getElementById("clear");

const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");

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

resetBtn.addEventListener("click", () => {
  operand = "";
  currNum = 0;
  prevNum = 0;
  result = 0;
  displayText.textContent = "0";
});

plusBtn.addEventListener("click", () => {
  if (prevNum === 0 && currNum === 0) {
    prevNum = parseInt(displayText.textContent);
  } else {
    currNum = parseInt(displayText.textContent);
    result = prevNum + currNum;
    prevNum = result;
    console.log(result);
  }
  operand = "plus";
  displayText.textContent = "0";
});

minusBtn.addEventListener("click", () => {
  if (prevNum === 0 && currNum === 0) {
    prevNum = parseInt(displayText.textContent);
    console.log(prevNum);
  } else {
    currNum = parseInt(displayText.textContent);
    result = prevNum - currNum;
    prevNum = result;
    console.log(result);
  }
  operand = "minus";
  displayText.textContent = "0";
});

multiplyBtn.addEventListener("click", () => {
  if (prevNum === 0 && currNum === 0) {
    prevNum = parseInt(displayText.textContent);
    console.log(prevNum);
  } else {
    currNum = parseInt(displayText.textContent);
    result = prevNum * currNum;
    prevNum = result;
    console.log(result);
  }
  operand = "multiply";
  displayText.textContent = "0";
});

divideBtn.addEventListener("click", () => {
  if (prevNum === 0 && currNum === 0) {
    prevNum = parseInt(displayText.textContent);
    console.log(prevNum);
  } else {
    currNum = parseInt(displayText.textContent);
    result = prevNum / currNum;
    prevNum = result;
    console.log(result);
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
