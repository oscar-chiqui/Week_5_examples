function cityStateAddress(city, state) {
    state = state.toUpperCase()
    address = city + ',' + state
    return address
}

address = cityStateAddress('Cuenca', 'azuay')
console.log(address)

// Another way 
// Use `backticks Anything in ${} will be evaluated and inserted into the string


function cityStateAddress(city, state) {
    state = state.toUpperCase()
    address = `${city}, ${state}`
    return address
}

// Expected Arguments

address = cityStateAddress('Minneapolis','mn')
console.log(address) // Prints Minneapolis.MN

// unexpected Arguments 
// Calling a function on an undefined value is an error

console.log(cityStateAddress('Minneapolis')) // error - no state so state.toUppercase() fails
console.log(cityStateAddress('Minneapolis','mn', 55403)) // extra arguments is ignored
console.log(cityStateAddress())  // error - no state so state.toUppercase() fails
