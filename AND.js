// && represents logical AND 
// used to check if two or more conditions are both true

let itemPrice = 100
if (itemPrice  === 100 && orderQuantity > 1) {
    console.log('You have ordered ar 1 or more $100 items')

}

/* || represents logical OR if at least one of these conditions are true, the whole expression is true */

let newCustomers = true
let haveEmail = false

if (newCustomers === true || haveEmail === false) {
    console.log('Need to request customer\'s email')
}

// More concise version. ! reserves the truth of a value.

if (newCustomers || !haveEmail) {
    console.log('Need to request customer\'s email')
}