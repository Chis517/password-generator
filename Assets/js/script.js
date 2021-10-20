// Button variable selected from the generate ID within the index.html
var generateBtn = document.querySelector("#generate");

// Character criteria objects variable
var allCharacters = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "1234567890",
  special: "!@#$%^&*()_-+="
}

// Enables a series of prompts to generate a password starting with a prompt asking for a password length
function generatePassword() {
  var password = ""
  var newPW = ""
  var pwLength = window.prompt("Between 8 and 128 characters, how long would you like your password to be?")

    // If the password length value is less than 8, greater than 128 characters, or entered with anything that isn't a number,
    // a window alert appears to state the password length requirements and pulls up the password length prompt again until a valid answer is entered
    while ((pwLength < 8) || (pwLength > 128) || (isNaN(pwLength) === true)) {
      alert("Your password must contain between 8 and 128 characters and has to be entered as a number")
      pwLength = window.prompt("Between 8 and 128 characters, how long would you like your password to be?")
    } 

  // Windows asking whether to include lowercase, uppercase, numeric, and/or special characters in the password
  function confirms() {
  var pwLower = window.confirm("Would you like lowercase characters?")
  var pwUpper = window.confirm("Would you like uppercase characters?")
  var pwNumber = window.confirm("Would you like numbers?")
  var pwSpecial = window.confirm("Would you like special characters?")
  
  if ((pwLower === false) && (pwUpper === false) && (pwNumber === false) && (pwSpecial === false)) {
    alert("you must choose at least one type of character")
  }

    // Need to set up prompts so at least one much be selected/equal true before generating password
    // while ((pwLower === false) && (pwUpper === false) && (pwNumber === false) && (pwSpecial === false)) 
    // else (pwLower, pwUpper, pwNumber, pwSpecial === false) {
    //   alert("Your password must contain at least one character type to generate password")
    //   pwLower = window.confirm("Would you like lowercase characters?")
    // }

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
    confirms()
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