let name = studentName.value
let gpa = studentGPA.value
let id = studentID.value

let errors = []

if (!name) {
    errors.push('Enter student name')
}

if (!id) {
    errors.push('Enter student ID')
}

if (!gpa || gpa <0 || gpa > 4) {
    errors.push('Enter GPA between 0 and 4')
}

if (errors.length > 0) {
    let errorMsg = errors.join('\n')
    alert(errorMsg)
    return
}