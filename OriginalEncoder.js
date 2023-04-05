// Constants
const prompt = require("prompt-sync")();

// Receiving messages to encode by prompt
const input = prompt("Enter a message to encode: ");

// Function to encrypt original text
function encrypt(str) {
  let result = str.split("").map((char) => {
    // If the character is space send back space to encoded string
    if (char === " ") {
      return char;
    }
    // Get the ascii number of the character
    let ascii = char.charCodeAt();

    // Set the offset based on the regular expression
    let offset = /[y-zY-Z]/.test(char) ? -24 : 2;

    // Get the character of value from the sum of the character plus the offset
    return String.fromCharCode(ascii + offset);
  });
  return result.join("");
}

// call function and showing the result
console.log(encrypt(input));
