// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

//Psuedocode: 
// Input: array of objects
// Output: an array with a sentence about each person with their name capitalized 
// write a test that will include expect and to equal statements for the variables provided
// run the test and see it fail it should be a not defined error
// create a function that uses array deconstruction by splitting the name object to separate the first name from the last name in order to capitalize only those names by locating them within the object and incorporating .toUpperCase
// use slice() to remove the element not needed 
// create a sentence using string interpolation, calling on both names and the occupation
// console log the test and variables
// test should pass


// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]


describe("crazySentence", () => {
    it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
      expect(crazySentence(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// RED  FAIL  ./code-challenges.test.js
// crazySentence
//   ✕ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)

// b) Create the function that makes the test pass.

const crazySentence = (array) => {
  return array.map((object) => {
    const fullName = object.name.split(" ")
    let firstName = fullName[0][0].toUpperCase() + fullName[0].slice(1)
    let lastName = fullName[1][0].toUpperCase() + fullName[1].slice(1)
      return `${firstName} ${lastName} is ${object.occupation}.`

 })

}
console.log(crazySentence(people))

// GREEN PASS  ./code-challenges.test.js
//   crazySentence
//     ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (1 ms)

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

//Psuedocode: 
// Input: mixed data array
// Ouput: an array of only the remainders of the numbers when divided by 3
// write a test that will include expect and to equal statements for the variables provided
// run the test and see it fail it should be a not defined error
// create a function that will filter through the array using .filter and typeof to access only the values that are numbers
// utilize the .map() method to iterate over the array, finding the remainders of the numbers divided by 3 by incorporating the modulo operator
// console log the test and variables
// test should pass


// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe("remainders", () => {
    it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
      expect(remainder(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
      expect(remainder(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})
// RED FAIL  ./code-challenges.test.js
// remainders
//   ✕ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3


// b) Create the function that makes the test pass.

const remainder = (array) => {
return array.filter(num => typeof num === 'number').map(num => num % 3)
}
console.log(remainder(hodgepodge1))
console.log(remainder(hodgepodge2))

// GREEN  PASS  ./code-challenges.test.js
// remainders
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)




// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

//Psuedocode: 
// Input: array of numbers
// Output: the sum of all the numbers cubed 
// write a test that will include expect and to equal statements for the variables provided
// run the test and see it fail it should be a not defined error
// create a function that utilizes the .map() method on the array to implement the exponentiation operator to the power of 3 and add this value to the variable "total"
// 
// console log the test and variables
// test should pass

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe("cubeSum", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    expect(cubeSum(cubeAndSum1)).toEqual(99)
    expect(cubeSum(cubeAndSum2)).toEqual(1125)
})
})

// RED FAIL  ./code-challenges.test.js
// cubeSum
//   ✕ takes in an array of numbers and returns the sum of all the numbers cubed

// ● cubeSum › takes in an array of numbers and returns the sum of all the numbers cubed

//   ReferenceError: cubeSum is not defined

// b) Create the function that makes the test pass.

const cubeSum = (array) => {
let total = 0
  array.map(num => total += num**3)
    return total 
}
console.log(cubeSum(cubeAndSum1))
console.log(cubeSum(cubeAndSum2))

// GREEN PASS  ./code-challenges.test.js
// cubeSum
//   ✓ takes in an array of numbers and returns the sum of all the numbers cubed (1 ms)

