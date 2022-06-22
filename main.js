const numBtn = document.querySelectorAll(".num-button");
let displayText = document.getElementById("display-text");
let currNum = 0;
let prevNum = 0;

displayText.textContent = "0";

numBtn.forEach((num) => {
  num.addEventListener("click", () => {
    displayText.textContent += num.id;
  });
});

function addition(currNum, prevNum) {
  return currNum + prevNum;
}

function subtraction(currNum, prevNum) {
  return currNum - prevNum;
}

function multiplication(currNum, prevNum) {
  return currNum * prevNum;
}

function division(currNum, prevNum) {
  return currNum / prevNum;
}
