//Arrow function syntax

const add = (num1, num2) => {
  return num1 + num2
}

//Implicit return

const subtract = (a, b) => a - b

//Returning an object
const obj = {
  name: 'Sunny',
  age: 30,
}

const createObj = () => obj

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

numbers.forEach(function (n) {
  console.log(n)
})

//Arrow function in callback

numbers.forEach((n) => {
  console.log(`${n * 2}`)
})

console.log(add(20, 10))
console.log(subtract(20, 10))
console.log(createObj())
