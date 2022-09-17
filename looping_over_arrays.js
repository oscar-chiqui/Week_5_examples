var letters = ['a', 'b', 'c'];

//loop over an array by counting the elements
for (var i = 0; i < letters.length; i++) {
    console.log('Element' + i + 'is' + leters[i]);
}

// Another way of looping over an array.
// More concice if you dont'n need to know the position of the elements 
// Notice the function definition in the function call.

var animals = ['Buffalo', 'Elephant', 'Yak'];
animals.forEach(function(element) {
    console.log(element);
})