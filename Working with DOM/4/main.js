console.log("hello")
// const items = document.querySelectorAll(".item")
// console.log(items)

// the problem if we have  1000 items means we will make a 1000 listeners
// not the best solution

// items.forEach((item) => {
//   item.addEventListener("click", () => {
//     console.log("the item that is clicked is:" + item.innerHTML)
//   })
// })

const app = document.querySelector(".todo-app")
// we have a single listener for the parent
app.addEventListener("click", (e) => {
  if (e.target && e.target.classList.contains("item")) {
    console.log("you clicked n item:" + e.target.innerText)
  }
})
