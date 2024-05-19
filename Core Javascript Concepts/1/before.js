const users = [
  { id: 1, name: "Jack", isActive: true, age: 20 },
  { id: 2, name: "John", isActive: true, age: 18 },
  { id: 3, name: "Mike", isActive: false, age: 30 },
]
// step 1
const names = []
users.map((user) => {
  names.push(user.name)
})

// console.log(names)

// step 2
const activeNames = []

// step 3

const sortAgeDes = users
  .sort(function (a, b) {
    return a.age - b.age
  })
  .filter((item) => item.isActive)
  .map((user) => user.name)
console.log(sortAgeDes)
