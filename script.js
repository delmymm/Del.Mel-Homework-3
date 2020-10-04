// Assignment Code
var generateBtn = document.querySelector("#generate");
var finalResult = "";

// Write password to the #password input
function generatePassword() {
  var passwordLength = prompt("Password must be bewteen 8 and 125 characters. " + "Please input how many characters you would like!");
  if (passwordLength < 8 || passwordLength > 125) {
    alert("Number must be between 8 and 125");
    generatePassword()
  } else {
    var askSymbols = confirm("Click OK to confirm special characters");
    var askNumbers = confirm("Click OK to add numbers");
    var askUpperCase = confirm("Click OK to add uppercase characters");

    writePassword();
  }

  function writePassword() {
    var symbols = "!@#$%^&*_+~`|\:;?><,./-="
    var numbers = "1234567890"
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var lowerCase = "abcdefghijklmnopqrstuvwxyz"
    var totalChar = lowerCase
    
    if (askSymbols === true) {
      totalChar = totalChar + symbols
    } if (askNumbers === true) {
      totalChar = totalChar + numbers
    } if (askUpperCase === true) {
      totalChar = totalChar + upperCase
    }
    console.log(totalChar);
    for (var i = passwordLength; i > 0; i--) {
      finalResult = finalResult + totalChar[Math.floor(Math.random() * totalChar.length - 1)]
    }
    console.log(finalResult);
    // var password = writePassword();

    var passwordText = document.querySelector("#password");

    passwordText.value = finalResult;
  }

  // function generatePassword() {
  //   return 
  // }
}
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
