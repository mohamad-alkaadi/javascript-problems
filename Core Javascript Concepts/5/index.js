let arrOne = [1, 2, 3]
let arrTwo = [4, 5, 6]
// first method
function conArray(arr1, arr2) {
  return [...arr1, ...arr2]
}
// secund method
function conArrayTwo(arr1, arr2) {
  // doesn't mutate original array
  // no need for spread
  return arr1.concat(arr2)
}

console.log(conArray(arrOne, arrTwo))
console.log(conArrayTwo(arrOne, arrTwo))
console.log(arrOne)
console.log(arrTwo)
