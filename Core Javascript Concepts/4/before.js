let arr = [1, 2, 3, 4]
function addElement(arr, element) {
  let newArr = []
  arr.map((i) => {
    newArr.push(i)
  })
  newArr.push(element)
  return newArr
}

newArray = addElement(arr, 5)

console.log("new array:", newArray)
console.log("old array:", arr)
