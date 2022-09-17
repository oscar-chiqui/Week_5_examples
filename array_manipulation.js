// how many elements in the array
let numberOfBirds = birds.length
console.log(numberOfBirds)

//Where is an element in the array ? return index if found, -1 if not 
console.log(birds.indexOf('Owl')) // 3
console.log(birds.indexof('Penguin'))  //-1

// loop over array
for (let j = 0; j < birds.length; j++) {
    console.log('Bird' + j + 'is' + birds[j])
}

birds.reverse()      // reverse order of elements
console.log(birds)

birds.sort()     // arrange array in ascending order.

console.log(birds)  // How would you sort n descending order ? 

let allBirds = birds.join()   // join all elements into a string

let allBirdsWithSeparator = birds.join('%') //Separated by commas,
                                             // Join all elements
console.log (allBirds)
console.log(allBirdsWithSeparator)      // connected with a custom string