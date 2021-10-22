// Button variable selected from the generate ID within the index.html
var generateBtn = document.querySelector("#generate");

// Character criteria objects variable
var allCharacters = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "1234567890",
  special: "!@#$%^&*()_-+="
}

// If the password length value is less than 8, greater than 128 characters, or entered with anything that isn't a number, a alert appears to state the password length requirements and pulls up the password length prompt again until a valid answer is entered. This function will also be called incase all the confirms are selected as false to keep the generatePassword function working with true character length/types logged and selected.
function promptLength() {
  var pwLength = ""
  pwLength = window.prompt("Between 8 and 128 characters, how long would you like your password to be?")

    while ((pwLength < 8) || (pwLength > 128) || (isNaN(pwLength) === true)) {
      alert("Your password must contain between 8 and 128 characters and has to be entered as a number")
      pwLength = window.prompt("Between 8 and 128 characters, how long would you like your password to be?")
    }
    return pwLength
}

// Enables a series of prompts to generate a password starting with a prompt asking for a password length
function generatePassword() {
  var password = ""
  var newPW = ""
  var pwLength = promptLength()

  // Windows asking whether to include lowercase, uppercase, numeric, and/or special characters in the password
  var pwLower = window.confirm("Would you like lowercase characters?")
  var pwUpper = window.confirm("Would you like uppercase characters?")
  var pwNumber = window.confirm("Would you like numbers?")
  var pwSpecial = window.confirm("Would you like special characters?")

  // If all character types are not chose by the user, a alert will appear stating that at least one character type much be selected to generate a password, then calls restarts the generatePassword function by calling the promptLength function
  while ((pwLower === false) && (pwUpper === false) && (pwNumber === false) && (pwSpecial === false)) {
    alert("You must choose at least one character type to generate a password")
    promptLength()
    pwLower = window.confirm("Would you like lowercase characters?")
    pwUpper = window.confirm("Would you like uppercase characters?")
    pwNumber = window.confirm("Would you like numbers?")
    pwSpecial = window.confirm("Would you like special characters?")
  }

  // If a character's boolean value is true, it will be included in the password generating function pulling
  // the characters from the allCharacters object strings between lines 6 through 9 to the newPW variable
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


  // The for loop function that randomizes the selected character types
  for (var i = 0; i < pwLength; i++) {
    password += newPW.charAt(Math.floor(Math.random() * newPW.length))
  }
  // Sends randomly generated password to the writePassword function below and 
  return password
}

// Writes generated password to the #password id in html
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Generated password displays in the password ID within the index.html
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);