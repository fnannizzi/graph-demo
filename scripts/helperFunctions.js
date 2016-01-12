function convertIndexToLetter(index) {
  return String.fromCharCode(65 + index);
}

function coinFlip() {
  return (Math.floor(Math.random() * 2) == 0);
}

function initializeArrayWithZeros(numZeros) {
	return Array.apply(null, Array(numZeros)).map(Number.prototype.valueOf,0);
}