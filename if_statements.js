//  Similar operators as Java, C#, Python === < <= > >= !==
// The ( ) around the condition are required
// Use { } to contain the conditional statement(s)

let orderQuantity = -1

if (orderQuantity < 0) {
    console.log('Error - cannot order a negative number')
}

// If statements - testing for equality
//== will attempt to convert types before comparison, so '10' == 10 is true
//Three equal signs === will check the type of the variable being
// compared, they must be the same for the comparison to be true

let grade = 100 

if(grade === 100 ) {
    console.log('You aced the quiz')

}

if (grade === 100) {
    console.log('The number 100 is the same as the string "100" with double equals ==')
}

if (grade === '100') {
    console.log('This will not be printed')
} else {
    console.log ( 'The number 100 is Not same as the string "100" with the triple equals ===')
}


