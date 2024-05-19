const users = [
  { id: 1, name: "Jack", isActive: true, age: 20 },
  { id: 2, name: "John", isActive: true, age: 18 },
  { id: 3, name: "Mike", isActive: false, age: 30 },
]
// step 1
const names = users.map((item) => item.name)
// console.log(names)
// step 2
activeNames = users.filter((user) => user.isActive).map((user) => user.name)
// console.log(activeNames)
// step 3
const sortAgeDes = users
  .sort(function (a, b) {
    return b.age - a.age
  })
  .filter((item) => item.isActive)
  .map((user) => user.name)
console.log(sortAgeDes)
