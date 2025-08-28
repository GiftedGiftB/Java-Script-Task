
function getStudentName(student) {
    return student.name
}

function getSecondCourse(student) {
    return student.courses[1];
}

function getZipCode(student){
    return student.address.zip;
}





module.exports = {getStudentName, getSecondCourse, getZipCode}