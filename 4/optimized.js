let arr = [1, 2, 3, 4]
// pure function // returns the same result every single time when we call it in the same arguments
// pure function // doesn't modify any variables outside the function
function returnAddToArray(arr, elm) {
  // spread operator // spreads all elements of old array inside a new array
  return [...arr, elm]
}
arrNew = returnAddToArray(arr, 9)
