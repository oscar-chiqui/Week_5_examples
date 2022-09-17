function validGPA(gpa) {
    if (gpa >= 0 && gpa <= 4 ) {
        return true

    }
    return false
}

function validGPA(gpa) {
    return gpa >= 0 && gpa <= 4 
}

console.log(validGPA(-1))  // false
console.log(validGPA(0))   // true
console.log(validGPA(3.5))  //true
console.log(validGPA(4))    //true
console.log(validGPA(10))   //false

// What happens if you call validGPA with a different number of arguments
// 1:  JavaScript does not require all the arguments defined
//2:  It does not do any type checking
//3: It will ignore any extra arguments - but you can access them if needed
// 4:  If you don't provide an argument, it will have the value undefined in the function

console.log(validGPA())     // false. Why
console.log(validGPA('not a number')) // false
console.log(validGPA(2.5))     // true
console.log(validGPA(3, 100)) // true. Extra Argument is ignored.