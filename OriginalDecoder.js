// Constants
const prompt = require("prompt-sync")();

// Receiving messages to encode by prompt
const input = prompt("Enter a message to encode: ");

// Function to encrypt original text
function decrypt(str) {
  let result = str.split("").map((char) => {
    if (char === " ") {
      return char;
    }

    let ascii = char.charCodeAt();
    let offset = /[A-Ba-b]/.test(char) ? 24 : -2

    return String.fromCharCode(ascii + offset);
  });
  return result.join("");
}

// call function and showing the result
console.log(decrypt(input));
