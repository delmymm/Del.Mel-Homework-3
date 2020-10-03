// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var symbols = ["!", "@", "#", "$", "%", "^", "*", "(", ")", "_", "+"]
// Write password to the #password input
function writePassword() {
  var passwordLength = prompt("How many characters do you want your password to contain?");
  var specialCharacters = confirm("Click OK to confirm special characters");
  var numbers = confirm("Click OK to add numbers");
  var lowerCase = confirm("Click OK to add lowercase characters");
  var upperCase = confirm("Click OK to add uppercase characters");

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword(params) {
  var passwordArray = [];
  var selectedFunctions = [];
  if (lowerCase) {
    selectedFunctions.push(generateLowerCase)
  }
  if (upperCase) {
    selectedFunctions.push(generateUpperCase)
  }
  if (numbers) {
    selectedFunctions.push(generateNumbers)
  }
  if (numbers > 8 ) {
    count --;
  }
  if (numbers < 125 ) {
    count ++;
  }
  if (specialCharacters) {
    selectedFunctions.push(generateCharacters)
    document.body.appendChild(writePassword);
  }
  for (var index = 0; index < passwordLength; index++) {
    console.log(array[index]);

  }
}
function generateLowerCase(params) {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function generateUpperCase(params) {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function generateNumbers(params) {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function generateSpecialCharacters(params) {
  return symbol[Math.floor(Math.random()*symbol.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
