const input = document.querySelector("input");
const length = input.getAttribute("data-length");
//console.log(length);
input.addEventListener("blur", (evt) => {
  //   console.dir(evt.currentTarget.value);
  //   console.dir(evt.currentTarget.value.length);
  if (evt.currentTarget.value.trim().length === Number(length)) {
    input.classList.add("valid");
    if (input.classList.contains("invalid")) {
      input.classList.remove("invalid");
    }
  } else {
    if (input.classList.contains("valid")) {
      input.classList.remove("valid");
    }
    input.classList.add("invalid");
  }
});
