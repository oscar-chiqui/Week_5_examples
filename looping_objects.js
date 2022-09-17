// As you loop over property names, you can access each property's value using square bracket syntax.


let furnitureColors = {couch: 'green', table: 'blue',chair: 'red'}

//looping over an object
for ( let furniture in furnitureColors) {
    let color = furnitureColors[furniture]
    console.log(`The ${furniture} is the color ${color}`)
}