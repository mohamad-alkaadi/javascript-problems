// .json() method is used to extract the JSON data from an HTTP response. When you make a request to an API or a server,
// the response typically contains data in JSON format. By calling .json() on the response object,
// you convert that JSON data into a JavaScript object that you can work with in your code.
// .json is asynchronous function
const response = fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
