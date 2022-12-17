const displayBtns = document.querySelectorAll("[data-display]");
const resetBtn = document.querySelector("[data-reset]");
const delBtn = document.querySelector("[data-delete]");
const equalityBtn = document.querySelector("[data-equality]");

displayBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    display(btn.value)
  });
});

resetBtn.addEventListener("click", reset);
delBtn.addEventListener("click", del);
equalityBtn.addEventListener("click", solve);

function display(val){
  return document.getElementById("screen").value += val;
}

function solve() {
  const screen = document.getElementById("screen").value;
  const newScreen = screen.replace("×", "*");
  const result = math.evaluate(newScreen);
  return document.getElementById("screen").value = result;
}

function reset() {
  return document.getElementById("screen").value = "";
}

function del() {
  return document.getElementById('screen').value = document.getElementById('screen').value.slice(0, -1);
}
