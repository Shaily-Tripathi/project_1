const { default: mongoose } = require("mongoose");

const isValidEmail = function (mail) {
  if (/[a-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}/.test(mail)) {
    return true;
  }
};

const isValidPassword = function (pass) {
  if (/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,32}$/.test(pass)) return true;
  return false
};

const isValidName = function(name){
  if (/^[A-Za-z]{1,35}/.test(name)) return true
  return false
}

const isValidBody = function (data) {
  return Object.keys(data).length > 0;
}
;

const isValidId = function (data) {
  return mongoose.Types.ObjectId.isValid(data);
};

const isValid = function (value) { //function to check entered data is valid or not

    if (typeof value == "string") {
        if (value.trim() === "") {
            //console.log(value.trim())
            return false
        } else { return value.trim() }
    } else { return false }
}

const isValidForArray = function (value) {      //function to check entered data in array is valid or not
    //console.log("value in isValidForArray function - " + value);
    if (typeof value == "string") { return isValid(value) }
    const newArr = []
    if (Array.isArray(value)) {
        // console.log(value);
        for (let i = 0; i < value.length; i++) {    //example :-   ["ghfgh","   ",56444,"freendon 1947,"ghhgf"]
            if (typeof (value[i]) == "string") {
                if (value[i].trim() !== "") {
                    newArr.push(value[i].trim())
                } else { return false }
            }
            else { return false }
        }
        // console.log(newArr)
        return newArr
    }
    else { return false }
}

function Boolean(value) {
    if (value == true || value == false) { return true }
    return false
}

module.exports = { isValidEmail,isValidName, isValidBody, isValidPassword, isValidId, isValidForArray, isValid, Boolean};