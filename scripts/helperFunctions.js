function convertIndexToLetter(index) {
  return String.fromCharCode(65 + index);
}

function coinFlip() {
  return (Math.floor(Math.random() * 2) == 0);
}