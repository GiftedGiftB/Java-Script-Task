
function getStudentName(student) {
    return student.name
}

function getSecondCourse(student) {
    return student.courses[1];
}

function getZipCode(student){
    return student.address.zip;
}

function updateAge(student){
    return student.age = 23;
}

function addNewProperty(student) {
    student.GPA = 3.8;
    return student.GPA;
}

function getDetails(student){
    return `${student.name} is ${student.age} years old and has a GPA of ${student.GPA}`;
}

function deposit(account, amount){
    account.balance += amount;
    return account.balance;
}

function withdraw(account, amount){
    if(account.balance >= amount){
        account.balance -= amount;
        return true
    }
    return false;
}


module.exports = {getStudentName, getSecondCourse, getZipCode, updateAge, addNewProperty, getDetails, deposit, withdraw};