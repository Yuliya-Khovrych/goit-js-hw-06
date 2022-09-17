function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("input");
const btnCreate = document.querySelector(`button[data-create]`);
const btnDestroy = document.querySelector(`button[data-destroy]`);
const boxes = document.querySelector("#boxes");

input.addEventListener("input", onNumberBoxes);
let amount;
function onNumberBoxes() {
  amount = Number(input.value);
  console.log(amount);
  return amount;
}

const box = [];
let size = 30;
function createBoxes(amount) {
  boxes.innerHTML = "";
  size = 30;
  for (let i = 0; i < amount; i += 1) {
    boxes.insertAdjacentHTML(
      "beforeend",
      `<div class="color" style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()};"></div>`
    );
    size = size + 10;
  }
  boxes.append(...box);
}

function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = null;
}

btnCreate.addEventListener("click", () => createBoxes(amount));
btnDestroy.addEventListener("click", destroyBoxes);
