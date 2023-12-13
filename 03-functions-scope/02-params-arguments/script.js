//Default Params
function registerUser(user = 'Bot') {
  return `user is ${user}`
}

console.log(registerUser())

//Rest Params
function sum(...numbers) {
  let total = 0
  for (const num of numbers) {
    total += num
  }
  return total
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8))

//Object as params

function loginUser(user) {
  return `The user ${user.name} with id of ${user.id} is logged in`
}

const user = {
  id: 1,
  name: 'Aaditya',
}
console.log(loginUser(user))

//Arrays as params

function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length)
  console.log(arr[randomIndex])
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

console.log(getRandom([1, 2, 3, 4, 5, 6, 7, 8]))
