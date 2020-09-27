// Assignment code here
var generateBtn = document.querySelector("#generate");

// Character Arrays
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "#", "%", "$", "&", ",", "*", "+", "-", ":", ";", ".", "/", "<", ">", "?","~"];

// Variable Declarations
var confirmLength = "";
var confirmLowerCase;
var confirmUpperCase;
var confirmNumber;
var confirmSpecialCharacter;

// Prompt for character count
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like your password to contain?"));


  // Loop for appropriate password length (8-128 characters)
  while(confirmLength <=7 || confirmLength >= 129) {
      alert("Password length must be between 8 and 128 characters. Try again!");
      var confirmLength = (prompt("How many characters would you like your password to contain?"));
      }

    // confirming parameters of password
    var confirmLowerCase = confirm("Would you like to include lowercase characters in your password?");
    var confirmUpperCase = confirm("Would you like to include uppercase characters in your password?");
    var confirmNumber = confirm("Would you like to include numerical characters in your password?");
    var confirmSpecialCharacter = confirm("Would you like to include special characters in your password?");
    

      // loop if none are selected
      while(confirmLowerCase === false && confirmUpperCase === false && confirmNumber === false && confirmSpecialCharacter === false) {
        alert("You must include at least one parameter");
        var confirmLowerCase = confirm("Would you like to include lowercase characters in your password?");
        var confirmUpperCase = confirm("Would you like to include uppercase characters in your password?");
        var confirmNumber = confirm("Would you like to include numerical characters in your password?");
        var confirmSpecialCharacter = confirm("Would you like to include special characters in your password?");
    }

          // Assign an action to password parameters
          var passwordCharacters = []

          if (confirmLowerCase) {
            passwordCharacters = passwordCharacters.concat(lowerCase)
          }
          if (confirmUpperCase) {
            passwordCharacters = passwordCharacters.concat(upperCase)
          }
          if (confirmNumber) {
            passwordCharacters = passwordCharacters.concat(number)
          }
          if (confirmSpecialCharacter) {
            passwordCharacters = passwordCharacters.concat(specialCharacter)
          }

          console.log(passwordCharacters)

          // Get references to the #generate element
          var generateBtn = document.querySelector("#generate");

          // Empty string for random array character
          var randomPassword = ""

          for(var i = 0; i < confirmLength; i++) {
            randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
            console.log(randomPassword)
          }
          return randomPassword;
      }

    // Write password to the #password input
    function writePassword() {
      var password = generatePassword();
      var passwordText = document.querySelector("#password");

      passwordText.value = password;

    }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
