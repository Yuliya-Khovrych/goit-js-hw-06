const input = document.querySelector("input");
const text = document.querySelector("#text");

input.addEventListener("input", (evt) => {
  //console.log(input.value);
  text.style.fontSize = `${input.value}px`;
});
