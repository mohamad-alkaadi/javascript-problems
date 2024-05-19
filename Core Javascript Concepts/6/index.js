const users = [
  { id: 1, name: "Jack", isActive: true },
  { id: 2, name: "John", isActive: true },
  { id: 3, name: "Mike", isActive: false },
]

// method 1 // worst

const isNameExists = (name, users) => {
  let exist = false
  for (let i = 0; i < users.length; i++) {
    if (users[i].name === name) {
      exist = true
    }
  }
  return exist
}

console.log(isNameExists("moh", users))

// method 2 // best approach
// we enter some a condition to see if a condition is true
const isNameExistsTwo = (name, arr) => arr.some((el) => el.name === name)

console.log(isNameExistsTwo("Mike", users))

// method 3
// we use the array find method

const isNameExistsThree = (name, users) => {
  return users.find((el) => el.name === name) ? true : false
}

console.log(isNameExistsThree("Mike", users))

// method 4
// we use the array find method

const isNameExistsFour = (name, users) => {
  const el = users.find((el) => el.name === name)
  //we use Boolean because the return is the full found object like if entered 'Mike' returns { id: 3, name: 'Mike', isActive: false } or else return undefined
  return Boolean(el)
}

console.log(isNameExistsFour("Mike", users))

// method 5

const isIndexExits = (name, users) => {
  const index = users.findIndex((el) => el.name === name)
  //   return th index
  //   return index
  // return true or false if index exits
  return index > 0
}

console.log(isIndexExits("Mike", users))
