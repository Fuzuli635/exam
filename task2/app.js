function swapCase(string) {
  let swappedStr = "";
  for (let i = 0; i < string.length; i++) {
    let element = string[i];
    if (element === element.toUpperCase()) {
      swappedStr += element.toLowerCase();
    } else {
      swappedStr += element.toUpperCase();
    }
  }
  return swappedStr;
}

let text = "jeDAcAdemY";
let swappedText = swapCase(text);
console.log(swappedText);
