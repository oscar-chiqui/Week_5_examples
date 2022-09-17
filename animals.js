// Use backticks, not regular quotes 
// Put a variable or expression in ${} and it will be evaluated and inserted into the string.

let lions = 4 
let tigers = 7 
let tigerPattern = 'stripped'

console.log(`There are ${lions} lions`)  // There are 4 lions
console.log(`There are ${lions + tigers} big cats`)  // There are 11 big cats
console.log (`all ${tigers} tigers are ${tigerPattern}`) // All 7 tigers are striped

// Modifying Elements

let animals = ['duck', 'bear', 'squirrel']

console.log(animals)  // ['duck','bear' , 'squirrel']

// Access elements by index 
console.log(animals[0])  // duck
let first_animal = animals[0]  // first_animal = 'duck'

// modify elements by index

animals[2] = 'mouse'
console.log(animals) //['duck', 'bear', 'mouse']

