const asyncFn = (callback) => {
  setTimeout(() => {
    callback("done")
  }, 2000)
}

asyncFn((message) => {
  console.log("callback", message)
})
