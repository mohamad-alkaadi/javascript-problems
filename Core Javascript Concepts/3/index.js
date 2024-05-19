// step one
// method one
// const multiply = (num1) => {
//   return (num2) => {
//     return num1 * num2
//   }
// }
// method two
// const multiply = (num1) => (num2) => num1 * num2
// console.log(multiply(2)(6))

const curry = function (fn) {
  var arity = fn.length
  return function f1(...args) {
    if (args.length === arity) {
      return fn(...args)
    } else {
      console.log("more or less args")
      return function f2(...moreArgs) {
        var newArgs = args.concat(moreArgs)
        return f1(...newArgs)
      }
    }
  }
}
const hello = curry((a, b, c) => a + b + c)

curredSum = hello(1)()
