// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwLength
var pwUpper
var pwLower
var pwSpecial
var pwNumeric


// When user clicks generateBtn

// document.getElementById("generateBtn").onclick = function() {
// getLength()
// };

generateBtn.addEventListener("click", writePassword)


function generatePassword(
  // parameters we pass to the function
  pwLength,
  pwUpper,
  pwLower,
  pwSpecial,
  pwNumeric,
)

// Series of prompts with funtions that create the password
// Window requesting user to define a length of password

// pwLength

let pwLength = window.prompt('Password Length').value;
// 128 > pwLength > 8
if (pwLength > 128) {
  window.alert('Length too long! Must be less than 128!')
} else if (pwLength < 8) {
  window.alert('Length too short! Much be more than 8!')
  return pwLength();
} else {
  let pwUpper = window.confirm('Uppercase?');
  let pwLower = window.confirm('lowercase?');
  let pwNumeric = window.confirm('Numbers');
  let pwSpecial = window.confirm('Special Characters?');
}

  // pwSpecial
  // specialArr = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=']
  // for (let i = o; i < specialArr.length; i++) {
  

  // pwUpper
  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  // pwLower
  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  // pwNumeric
  function getRandomNumeric() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  // pwSpecial
  function getRandomSpecial(){}

  // take from all the characters
  // randomize the order they appear in the password

  let generatePassword = '';

  const typesCount = lower + upper + number + special
  // selects all 4

  // types array
  // const typesArr = [{ lower }, { upper }, { number }, { special }].filter(item => Object.values(item)[0]);

  // object
  // let car = {
  // key: value,
  // ex. make: "Toyota"
  // upper: "G",
  // lower: 'p',
  // upecial: '@'
  // }

  let upper = {
    key: value,
    randomUpper1: "G",
  }



  const finalPW = generatePassword.slice(0, pwLength)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  return
}

// generatePassword();
