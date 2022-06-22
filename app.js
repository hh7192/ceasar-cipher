// -------------------------- DOM QUERIES -------------------------- //
const string = document.querySelector("#string");
const shift = document.querySelector("#shift");
const button = document.querySelector("#button");
const output = document.querySelector("#output");

// variable to store the result
let result = "";
let stringVal = "";
let shiftVal = "";

function ceasar(string, shift) {
  // iterate over input string
  for (let i = 0; i < string.length; i++) {
    // Get the character seperately in a variable
    let inputChar = string[i];
    // Check if it's a letter
    if (inputChar.match(/[a-z]/i)) {
      // Get the letter's code
      let inputCharCode = string.charCodeAt(i);
      //   console.log(inputCharCode);
      // Capital letters
      if (inputCharCode >= 65 && inputCharCode <= 90)
        inputChar = String.fromCharCode(
          ((inputCharCode - 65 + shift) % 26) + 65
        );
      // Lowercase letters
      else if (inputCharCode >= 97 && inputCharCode <= 122)
        inputChar = String.fromCharCode(
          ((inputCharCode - 97 + shift) % 26) + 97
        );
    }
    // Add the character
    result += inputChar;
  }
  // negative shifts handle
  if (shift < 0) return ceasar(string, shift + 26);

  // Result
  output.innerHTML = result;
}
// console.log(ceasar("abcd", 1));
button.addEventListener("click", () => {
  stringVal = string.value;
  shiftVal = shift.value;
  ceasar(stringVal, shiftVal);
});
