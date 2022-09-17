// Array variable (like a list in Python)
let quiz_scores = [100, 78,93,81, 100, 99]
console.log(quiz_scores)

//Another array. Can mix types if needed
let my_array = [5,6, 'cake',1234, text]

//Print whole array
console.log(my_array)    // [5.6. 'cake', 1234.123, 'hello world']

//Read individual elements 
console.log(my_array[0])    //Array indexes start at 0. This prints 5
console.log(my_array[2])   // Prints cake
console.log(my_array[-10])  // non-existent index:This prints 'undefined'
console.log(my_array[10])   //non-existent index:This prints 'undefined'

//can modify elements by index
my_array[2] = 'pizza'   
console.log(my_array)   // [5, 6, 'cake' 1234.123, 'hello world' ]