var generateBtn = document.querySelector("#generate");
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var symbols = ["!", "@", "#", "$", "%", "^", "*", "(", ")", "_", "+"]

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("How many characters do you want your password to contain?");
  if (passwordLength < 8 ) {
    alert("Need more characters!")
  }
  if (passwordLength > 125 ) {
    alert("Exceeded character length!")
  }
  var specialCharacters = confirm("Click OK to confirm special characters");
  if (specialCharacters) {
    selectedFunctions.push(generateSpecialCharacters)
  }
  var numbers = confirm("Click OK to add numbers");
  if (numbers) {
    selectedFunctions.push(generateNumbers)
  }
  var lowerCase = confirm("Click OK to add lowercase characters");
  if (lowerCase) {
    selectedFunctions.push(generateLowerCase)
  }
  var upperCase = confirm("Click OK to add uppercase characters");
  if (upperCase) {
    selectedFunctions.push(generateUpperCase)
  }

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
}

function generateLowerCase(_params) {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function generateUpperCase(_params) {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function generateNumbers(_params) {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function generateSpecialCharacters(_params) {
  return symbols[Math.floor(Math.random()*symbols.length)];
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

