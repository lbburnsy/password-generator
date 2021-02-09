// Query the Document

let generateButton = document.getElementById("generate");
let clearButton = document.getElementById("clear");
let outputEl = document.getElementById("output");

// Declare criteria libraries

let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "123456790";
let specialCharacters = "!#$%&'()*+,-./:;<=>?@_`{|}~";

// Criteria

let length;
let wantUpperCase;
let wantLowerCase;
let wantNumbers;
let wantSpecialCharacters;

// Sets global variables for the characters here

let characterPool = "";
let finalPassword = "";

// Takes the prompt and turns it into a boolean

function returnBoolean(criteria) {
  criteria = criteria.toLowerCase();
  if (criteria === "yes") {
    return true;
  } else {
    return false;
  }
}

// Sets variables to the prompt boolean value

function checkCriteria() {
  length = prompt("How long should the password be? (Between 8 and 128):");
  wantUpperCase = returnBoolean(
    prompt("Would you like to include uppercase letters? (Yes/No):")
  );
  wantLowerCase = returnBoolean(
    prompt("Would you like to include lowercase letters? (Yes/No):")
  );
  wantNumbers = returnBoolean(
    prompt("Would you like to include numbers? (Yes/No):")
  );
  wantSpecialCharacters = returnBoolean(
    prompt("Would you like to include special characters? (Yes/No):")
  );
}

// If we want the certain character set, it gets added to the total pool here.

function assembleCharacterPool() {
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

// Pulls random characters out of the total pool depending on desired length of password and pool length

function generatePassword() {
  for (let i = 0; i < length; i++) {
    finalPassword += characterPool.charAt(
      Math.floor(Math.random() * characterPool.length)
    );
  }
  return finalPassword;
}

// Resets the values so that you can repeatedly generate new passwords

function resetValues() {
  length = 0;
  characterPool = "";
  finalPassword = "";
}

// Clears the output div

function resetOutput() {
  outputEl.innerHTML = "";
}

// Main function to check criteria and assemble passwords

function writePassword() {
  resetValues();
  checkCriteria();
  assembleCharacterPool();
  generatePassword();
  outputEl.innerHTML = finalPassword;
}

// Event listener to run the program

generateButton.addEventListener("click", writePassword);
clearButton.addEventListener("click", resetOutput);