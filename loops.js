// loop over an array by counting the elements
// This approach is useful if you need to know where you are in the array 

for (let i = o; i < letters.length; i++) {
    console.log('Element ' + i + 'is' + letters[i])
}


// Another way of looping over an array.
//More consice if you dont need to know the position of the elements 
//Notice the function definition in the functino call !

let animals = ['Buffalo', 'Elephant', 'Yak']

animals.forEach(function(element){
    console.log(element)
})

// for loop examples 
 for (let x = 0; x < 10; x++) {
    console.log(x)
 }

 let name = "JavaScript"
 for (let letter = 0; letter < name.length; letter++){
    console.log(name[letter])
 }

 