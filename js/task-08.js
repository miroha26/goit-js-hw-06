const form = document.querySelector(".login-form");
const formInputs = document.querySelectorAll(".login-form input");
const btn = document.querySelector("button");

const handleSubmit = (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.target;

  if (email.value === "" || password.value === "") {
    return alert("Please fill up the Form!");
  }

  const formData = {
    email: email.value,
    password: password.value,
  };
  console.log(formData);
  event.currentTarget.reset();
};

form.addEventListener("submit", handleSubmit);
