birds = ['Parrot', 'Chicken', 'Dodo','Owl']

birds[1] = 'Eagle'    /// replace element 1 with 'Eagle'
birds[5] = 'Sparrow' /// JS lets you do this. There is no element 5, but 'Sparrow '

console.log(birds) // is added at position 5 , and undefined elements are added to fill in the gaps.

birds[4] = 'Jay'     // fill in the blank element
console.log(birds)
 
let firstBird = birds[0]     // Read data a copy of data from the array
let thirdBird = birds[2]
console.log(firstBird, thirdBird)

let lastBird = birds.pop()     // removes last item and returns it
console.log(lastBird, birds)
birds.push('Seagull')      // Push adds new element to end of array
console.log(birds)

firstBird = birds.shift()      // Remove and returns first element
console.log(firstBird, birds)
birds.unshift('Wren')         // add element to start of array 
console.log(birds)

// Add to the end of an array

animals.push('ladybug')
console.log(animals)  // ['duck', 'bear','mouse','ladybug']

// Remove last element of array, returns that element
let last_animal = animals.pop()
console.log(animals)     // ['duck', 'bear','mouse']
console.log(last_animal)  // ladybug


// How long is an array

numberOfAnimals = animals.length
console.log(`There are ${numberOfAnimals}animals.`)

// Sorting an array 
animals.sort()
console.log(animals)

// Reversing an array
animals.reverse()
console.log(animals)

// Adding data to a non-existent array element
animals[6] = 'squid'
console.log(animals)

// Reading a non-existent array element
animal_ten = animals[10]
console.log(animal_ten)    // undefined