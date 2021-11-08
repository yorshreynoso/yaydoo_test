const userModel = require('../models/userModel');

const user = {};

user.validateEmail = email => {
    const createUser = userModel.getUser(email);
    if(createUser !== null) {
        return {status: true }; //
    } else {
        return {status: false, message: "El correo electronico ya existe" } // el usuario ya existe
    }
}

user.validateUser = data => {
    const {email, password, name} = data;

    if((email === undefined) ||(email === "")  || (name === undefined) || (name === "") || (password === undefined) || (password === "") ) {
        return false;
    } return true;
}

user.createUser = async(data) => {
    const {email, password, name} = data;
    return await userModel.createUser({email, password, name});
}

module.exports = user;