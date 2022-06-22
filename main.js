const numBtn = document.querySelectorAll(".num-button");
const plusBtn = document.getElementById("plus");
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

equalsBtn.addEventListener("click", () => {
  if (operand === "plus") {
    currNum = parseInt(displayText.textContent);
    result = prevNum + currNum;
    displayText.textContent = result;
  }
});
