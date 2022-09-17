const form = document.querySelector(".login-form");
const input = document.querySelector("input");
form.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  const data = {
    email: email.value,
    password: password.value,
  };
  console.log(data);
  evt.currentTarget.reset();
}
