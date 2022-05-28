// Assignment code here


// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const passLength = parseInt(prompt("Please enter a length between 8 and 128"));
  if (isNaN(passLength) || passLength < 8 || passLength > 128) {
    alert("This is an invalid password length. Please try again");
    return;
  }

  let listOfCharacters = " ";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const numericChars= "0123456789";
  const specialChars = ' !"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~';

  //upper case
  const upperCase = prompt("Type Y if you want upper case characters");
  if (upperCase == "Y" || upperCase == "y") {
    listOfCharacters += alphabet.toUpperCase();
  }

  // lower case
  const lowerCase = prompt("Type Y if you want lower case characters");
  if (lowerCase == "Y" || lowerCase == "y") {
    listOfCharacters += alphabet.toLowerCase();
  }

  // numeric
  const numeric = prompt("Type Y if you want numeric characters");
  if (numeric == "Y" || numeric == "y") {
    listOfCharacters += numericChars;
  }
  // special characters
  const special = prompt("Type Y if you want special characters");
  if (special == "Y" || special == "y") {
    listOfCharacters += specialChars;
  }
  
  //generate password
  const password = []
  for (let i=0; i < passLength; i++) {
    const pos = Math.round(Math.random() * listOfCharacters.length)
    password.push(listOfCharacters[pos]);
  }
  document.getElementById("password").textContent=password.join("")
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


