const userModel = require('../models/userModel');

const user = {};

user.validateEmail = async email => {
    const createUser = await userModel.getUser(email);

    if(!createUser) {
        return {status: true }; //true, el usuario no existe
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
    const userCreated = await userModel.createUser({email, password, name});

    if(userCreated) {
        return {
            status: true,
            message: `The user ${data.email} was created correctly`
        }
    } else {
        return {
            status: false,
            message:"The user was not created"
        }
    }
}

user.getAllUsers = async() => {
    const allUsers = await userModel.getAllUsers();

    if(!allUsers) {
        return {status:false, message:"No hay Usuarios"};
    } else {
        return {status:true, data: allUsers};
    }
}

user.getUserByEmail = async(email) => {
    const user = await userModel.getUser(email);
    if(user) {
        return user;
    } else {
        return {status:false, message:`No existe usuario con el correo ${email}`}
    }
}

user.modify = async(id, data) => {
    const userUpdate = await userModel.update(id, data);
    if(!userUpdate) {
        return {
            status:false,
            message: "No se pudo actualizar la informacion"
        }
    }
    return {
        status: true,
        message: "Actualizacion correcta"
    }
}

user.delete = async(id) => {
    const userDelete = await userModel.delete(id);
    if(!userDelete) {
        res.status(400).json({ status: false, message:"Ocurrio un error al eliminar al usuario"} )
    } else {
        res.status(200).json({status: true, message:"Usuario eliminado correctamente" })
    }
}

module.exports = user;