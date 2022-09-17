// create an object - contains properties
// properties are name: value pairs

let user = {username: 'Zoe', password: 'Kittens'}
// Read data
console.log(user.username) // zoe

// Read data - another way 
console.log(user['username']) // zoe

//Modifying properties
// dot notation and bracket notation 

user.password = 'zebras'
console.log(`New password is ${user.password}`)

user['passoword'] = 'armadillo'
console.log(`User password is now ${user.password}`)

// add another attribute - even though Its not defined in our object

user.email = 'zoe@zoe.com'
console.log(user.email)  // zoe@zoe.com