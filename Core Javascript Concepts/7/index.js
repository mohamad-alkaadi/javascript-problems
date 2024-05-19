let arr = [1, 2, 3, 4, 5, 7, 6, 5]

// method 1 // best method

const uniqueArr = (arr) => {
  // spread from the array a new set
  // an object that allows you to store unique values fro any type
  // unique means no value duplication
  return [...new Set(arr)]
}

console.log(uniqueArr(arr))

// method 2
const uniqueArrTwo = (arr) => {
  const result = []
  arr.forEach((item) => {
    if (!result.includes(item)) {
      result.push(item)
    }
  })
  return result
}

console.log(uniqueArrTwo(arr))

// method 3

const uniqueArrThree = (arr) => {
  return arr.reduce((accumulator, el) => {
    return accumulator.includes(el) ? acc : [...accumulator, el]
  }, [])
}
