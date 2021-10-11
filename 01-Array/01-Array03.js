const arr = [
  [10],
  [9, 7, 1],
  [2, 8],
];

function searchInArray(input, number) {
  let newData = [].concat(...input);
  for(let i = 0; i < newData.length; i++) {
    if(newData[i] == number)
    return i;
  }
  return null;
}

console.log(searchInArray(arr, 3));
console.log(searchInArray(arr, 2));
console.log(searchInArray(arr, 4));
console.log(searchInArray(arr, 8));
