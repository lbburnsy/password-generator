// Query the Document

let generateButton = document.getElementById("generate");
let outputEl = document.getElementById("output");

// declare variables

let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "123456790";
let specialCharacters = "!@#$%^&*(_)<>?+-";

// Criteria

let length;
let wantUpperCase;
let wantLowerCase;
let wantNumbers;
let wantSpecialCharacters;


let characterPool = "";
let finalPassword = "";

function returnBoolean(criteria) {
    criteria = criteria.toLowerCase();
    if (criteria === "yes") {
        return true;
    } else {
        return false;
    }
}

function checkCriteria() {
    length = 0;
    length = prompt("How long should the password be? (Between 8 and 128):");
    wantUpperCase = returnBoolean(prompt("Would you like to include uppercase letters? (Yes/No):"));
    wantLowerCase = returnBoolean(prompt("Would you like to include lowercase letters? (Yes/No):"));
    wantNumbers = returnBoolean(prompt("Would you like to include numbers? (Yes/No):"));
    wantSpecialCharacters = returnBoolean(prompt("Would you like to include special characters? (Yes/No):"));
}

function assembleCharacterPool() {
    characterPool = "";

    if (wantUpperCase) {
        characterPool += upperCase;
    }

    if (wantLowerCase) {
        characterPool += lowerCase;
    }

    if (wantNumbers) {
        characterPool += numbers;
    }

    if (wantSpecialCharacters) {
        characterPool += specialCharacters;
    }

    return characterPool;
}

function generatePassword() {
    for (let i = 0; i < length; i++) {
        finalPassword += characterPool.charAt(Math.floor(Math.random() * characterPool.length));
    }
    return finalPassword;
}

function checkWorking() {
    console.log(characterPool);
}

function writePassword() {
    checkCriteria();
    assembleCharacterPool();
    generatePassword();
    // checkWorking();
    outputEl.innerHTML = finalPassword;
}

generateButton.addEventListener('click', writePassword);
