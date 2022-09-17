// type Coercion

let data = 10 
console.log ('data plus 1 is ' + data + 1 ) // data coerced into a string 'Data plus 1 is 101'
console.log (data + 1 + 'is data plus 1') // compare to output of this: '11 is data plus 1'
let string_number ='123'
let times_two = string_number * 2  // string_number is coerced to a numerical value
console.log (times_two)     // 246

let pet = "cat"
let cat_times_two =pet *2
console.log(cat_times_two)  // can't make sense of this -NaN

// While Loops 

/* A while loop to double a number and display it 
 Stop when a number greater than 100 is reached */

 let maxVal = 100 
 let number = 1 
 while (number < maxVal) {
    number  *= 2 
    console.log('number = ' + number)
 }

 let text = 'hello world'

 let stringLength = text,length // length is a property

 let shout = text.toUpperCase() // These are methods - convert to uppercase

 let whisper = text.toLowerCase() // And to Lowercase

 let whereIsW = text.indexOf('w') // Index of first matching character or -1 if not found

 let whereIsZ = text.indexOf('z') // Index of first matching character or -1 if not found

 let whisperAndShout = whisper.concat(shout) // Join strings together

 let replaceALL0 = text.replace('o','o')

 let replace0 = text.replace(/o/g, '0')

 let removeWhitespace = text.trim()

 console.log(stringLength, shout, whisper, whereIsW, whereIsZ,
   whisperAndShout, replace0, replaceALL0, removeWhitespace)