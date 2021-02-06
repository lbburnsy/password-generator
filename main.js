// Query the Document

let generateButton = document.getElementById("generate");
let outputEl = document.getElementById("output");

let finalPassword = "asdoifhaosidfas"

function writePassword() {
    outputEl.innerHTML = finalPassword;
}

generateButton.addEventListener('click', writePassword);