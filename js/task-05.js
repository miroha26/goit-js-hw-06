const inputName = document.querySelector("#name-input");

const outputName = document.querySelector("#name-output");

const defaultValue = form.text.textContent;

const onInputChange = (event) => { 
    form.text.textContent = event.currentTarget.value;
        if (form.text.textContent.length === 0) {
            return form.text.textContent = defaultValue;
        };
};

form.input.addEventListener("input", onInputChange);
