let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

decrementBtn.addEventListener("click", () => {
  return (value.textContent = `${(counterValue -= 1)}`);
});

incrementBtn.addEventListener("click", () => {
  return (value.textContent = `${(counterValue += 1)}`);
});
