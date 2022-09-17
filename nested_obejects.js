// create an object. Values can be strings , number, lists, other objects

var user = {
    username: 'Zoe',
    password: 'Kittens',
    userid: 1, 
    roles: ['user', 'admin'],   // roles value is an array
    contact : {                 // contact value is another object
        phone:'123-456-7890',
        office:'T.1400'
    }
}

user.userid = 101   // Change userid
console.log(user)

console.log('User roles are:', user.roles)  // Print roles arrays
console.log('User roles are:', user['roles'])  // Print roles arrar , other syntax
console.log('User first role is ' + user.roles[0]) // First role

//All of the user's roles
console.log('All the user roles are:')
user.roles.forEach(function(role) {
    console.log(role)
})

user.contact.office = 'M.1234' // change office
console.log('New office is' + user.contact.office)

console.log('User phone number is ' + user.contact.phone)  // Access nested values

// Add another attribute - even though it's not defined in our object
user.email =  'zoe@minneapolis.edu'