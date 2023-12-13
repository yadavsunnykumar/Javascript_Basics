// Define a function
function sayHello() {
  console.log('Hello World!')
}

//Invoke,execute or call a function
sayHello()

//Define a function with parameters
function add(num1, num2) {
  return num1 + num2
}
console.log('The sum is ' + add(5, 3))

// In the above example inside add() function arguments are passed as 5 and 3

// Parameter vs. Arguments
//Parameters are the names of the variables that are used to pass data into a function
//Arguments are the value that are passed into the  function

// Returning the value from the function

function subtract(num1, num2) {
  return num1 - num2
}

const subtractReturn = subtract(20, 5)

console.log(subtractReturn)
