// Using the == operator, if variables can be coerced to the same value,
//they are considered equal
//• To make JS check type as well as value, use the === operator
//• There's a !== operator for checking non-equality
//Is "5" equal to 5 ?


let number_5 = 5
let string_5 = '5'

// == double equals  operator
console.log(number_5 == string_5) // true
// types are coerced and the string '5' is considered == equal to the number 5

// === triple equals operator
console.log(number_5 === string_5) // false
// false. Types are NOT coerced, the two operands must be the same type,
// as well as the same value
// The string '5' is NOT considered === equal to the number 5

// = not equals operator 
console.log(number_5 !=string_5)  // false
/* Types are coerced and the string'5' is considered == equal to the number 5
So checking non-equality between '5' ad 5 return false - they are not, not equal */

// == not equals operator 
console.log(number_5 !== string_5) //True
/* False. Types are Not coerced , the two operands must be the same type,
as well as the same value 
The string '5' is Not considered == equal to the number 5 */

