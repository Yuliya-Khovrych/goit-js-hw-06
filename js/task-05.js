const input = document.querySelector("input");
const output = document.querySelector("span");

input.addEventListener("input", (evt) => {
  output.textContent = evt.currentTarget.value.trim();
  if (output.textContent === "") {
    output.textContent = "Anonymous";
  }
});
