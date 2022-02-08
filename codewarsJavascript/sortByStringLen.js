var strgs=["Beg", "Life", "I", "To"];

console.log(sortByLength(strgs))

function sortByLength (array) {
    // Return an array containing the same strings, ordered from shortest to longest
  
  return array.sort((a, b) => a.length - b.length);

};