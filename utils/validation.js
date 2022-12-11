const empty = (input) => {
    if (input === undefined || input === '') {
        return true;
    }
    return false;
};

//Email Check
const isValidEmail = (email) => {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
};

//Password Validation
const validatePassword = (password) => {
    if (password.length <= 7 || password === '') {
        return false;
    } return true;
};


module.exports = { empty, isValidEmail, validatePassword };