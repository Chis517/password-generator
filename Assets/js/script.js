// Assignment Code
var generateBtn = document.querySelector("#generate");

var allCharacters = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "1234567890",
  special: "!@#$%^&*()_-+="
}

function generatePassword() {
  var password = ""
  var newPW = ""
  var pwLength = window.prompt("Between 8 and 128, how long would you like your password to be?")

  while ((pwLength < 8) || (pwLength > 128) || (isNaN(pwLength) === true)) {
    alert("Your password must contain between 8 and 128 characters and has to be entered as a number")
    pwLength = window.prompt("Between 8 and 128, how long would you like your password to be?")
  }

  var pwLower = window.confirm("Would you like lowercase characters?")
  var pwUpper = window.confirm("Would you like uppercase characters?")
  var pwNumber = window.confirm("Would you like numbers?")
  var pwSpecial = window.confirm("Would you like special characters?")

  if (pwLower === true) {
    newPW += allCharacters.lower
  }
  if (pwUpper === true) {
    newPW += allCharacters.upper
  }
  if (pwNumber === true) {
    newPW += allCharacters.number
  }
  if (pwSpecial === true) {
    newPW += allCharacters.special
  }
  console.log(newPW)

  for (var i = 0; i < pwLength; i++) {
    password += newPW.charAt(Math.floor(Math.random() * newPW.length))
  }
  return password

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
