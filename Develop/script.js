var numbers = "0123456789";
var specialChars = "!@#$%^&*()_+~`|}{[];:?/-=";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = lowercase.toUpperCase
var upperCaseResponse = false;
var numbersResponse = false;
var specialCharsResponse = false;
var lowerCaseResponse = false;
var desiredLength = 0;
var includedCharContainer = ""
var newPassword = ""







// 
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
