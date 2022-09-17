// A function to check if a zip
// code is valid for Minnesota

function isMinnesotaZip(code){

// && is the AND operator
    if (code >=55001 && code <= 56763) {
        return true
    }

    return false
}

console.log(isMinnesotaZip(55403)) //True
console.log(isMinnesotaZip(90210)) // false
console.log(isMinnesotaZip('55403')) // True
