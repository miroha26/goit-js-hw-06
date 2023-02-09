const input = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
function onTypingInInput(e) {
  nameOutput.textContent = e.currentTarget.value.trim();
  if (!nameOutput.textContent) {
    nameOutput.textContent = "Anonymous";
  }
}
input.addEventListener("input", onTypingInInput);
