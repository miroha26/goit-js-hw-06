const inputText = document.querySelector("#validation-input");
const textLength = inputText.getAttribute("data-length");

inputText.addEventListener("blur", () => {
  if (inputText.value.length === Number(textLength)) {
    inputText.classList.add("valid");
    inputText.classList.remove("invalid");
  } else {
    inputText.classList.add("invalid");
    inputText.classList.remove("valid");
  }
});
