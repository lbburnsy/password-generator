// Query the Document

let generateButton = document.getElementById("generate");
let outputEl = document.getElementById("output");

// declare variables

let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "123456790";
let specialCharacters = "!@#$%^&*(_)<>?+-";

// Criteria

let wantUpperCase;
let wantLowerCase;
let wantNumbers;
let wantSpecialCharacters;

function returnBoolean(criteria) {
    criteria = criteria.toLowerCase();
    if (criteria === "yes") {
        return true;
    } else {
        return false;
    }
}

function checkCriteria() {
    wantUpperCase = returnBoolean(prompt("Would you like to include uppercase letters? (Yes/No):"));
    wantLowerCase = returnBoolean(prompt("Would you like to include lowercase letters? (Yes/No):"));
    wantNumbers = returnBoolean(prompt("Would you like to include numbers? (Yes/No):"));
    wantSpecialCharacters = returnBoolean(prompt("Would you like to include special characters? (Yes/No):"));
}

function writePassword() {
    checkCriteria();
    // outputEl.innerHTML = finalPassword;
}

generateButton.addEventListener('click', writePassword);
