// 'Window' is globally scoped
// alert('hello')
// console.log(innerwidth)
// console.log(window)

//Global Scope variable
const x = 100
console.log(x + 'in global')

function run() {
  //Access global vars in functions
  // console.log(window.innerHeight)
  console.log(x + 'in function')
}
run()

//Access global vars in blocks
if (true) {
  console.log(x + 'in block')
  //This block variable are not accessible in the global or function scope

  let z = 3
}
function add() {
  //Overwriting global x (variable shadowing)
  const x = 1
  const y = 3
  console.log(x + y)
}

add()

// we cannot access the function scoped variable in global scope
// console.log(y)
