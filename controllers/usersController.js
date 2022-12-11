const { errorMessage, successMessage, status } = require("../utils/status")
const { empty, isValidEmail, validatePassword } = require("../utils/validation");
const User = require("../models/User");

const createUser = async (req, res, next) => {

    const { name, email, password } = req.body;
    if (empty(email) || empty(name) || empty(password)) {
        errorMessage.error = 'Email, password, and name field cannot be empty';
        return res.status(status.bad).send(errorMessage);
    }

    if (!isValidEmail(email)) {
        errorMessage.error = 'Please enter a valid Email';
        return res.status(status.bad).send(errorMessage);
    }

    if (!validatePassword(password)) {
        errorMessage.error = 'Password must be more than seven(7) characters';
        return res.status(status.bad).send(errorMessage);
    }

    try {
        const userExit = await User.findOne({ email });

        if (userExit) {
            const token = await userExit.signToken();
            successMessage.message = "user already exist"
            successMessage.user = userExit.userJSON(token)
            res.status(status.success).json(successMessage);
        } else {
            var user = await User.create(req.body);
            const token = await user.signToken();
            successMessage.user = user.userJSON(token)
            res.status(status.success).json(successMessage);
        }

    } catch (error) {
        errorMessage.error = error.message
        res.status(status.bad).json(errorMessage)
        return next(error)
    }
};


const siginUser = async (req, res, next) => {
    const { email, password } = req.body;
    if (empty(email) || empty(password)) {
        errorMessage.error = 'Email or Password detail is missing';
        return res.status(status.bad).send(errorMessage);
    }
    if (!isValidEmail(email) || !validatePassword(password)) {
        errorMessage.error = 'Please enter a valid Email or Password';
        return res.status(status.bad).send(errorMessage);
    }
    try {
        const user = await User.findOne({ email })
        if (!user) {
            errorMessage.error = "Email not registered";
            return res.status(status.bad).json(errorMessage);
        }
        const result = await user.verifyPassword(String(password));
        if (!result) {
            errorMessage.error = "Invalid Password";
            return res.status(status.bad).json(errorMessage)
        }
        const token = await user.signToken();
        successMessage.login = true
        successMessage.user = user.userJSON(token)
        return res.status(status.success).json(successMessage);
    } catch (error) {
        return next(error);
    }
}

const getUser = async ( req, res, next ) =>{ 
    const { email } = req.body
    const user = await User.findOne({email})
    const token = await user.signToken();
    successMessage.user = user.userJSON(token)
    successMessage.token = token
    res.status(status.success).json(successMessage)
}

module.exports =
{
    createUser,
    siginUser,
    getUser
};