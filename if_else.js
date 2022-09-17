console.log('Based on the number of the legs a creature has , I will try to guess what it is.')

let legs = 4 

if (legs < 0 ) {
    console.log('I don\`t think anything has a negative number of legs')

}
else if (legs % 2 !== 0 ) {
    console.log('And odd number of legs, are you sure ?')
}

else if (legs === 0 ) {
    console.log('Is it a snake?')
}
else if (legs === 2 ) {
    console.log ('A biped animal, such as a human?')
}
else if (legs === 4) {
    console.log('A quadruped, like a zebra?')
}
else if (legs === 6 ) {
    console.log('Probably an insect, like a bee?')
}
else if (legs === 8 ) {
    console.log('Possibly a spider')
}
else {
    console.log('More than 8 legs =perhaps a millipede')
}
    