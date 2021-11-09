const User = require("./userSchema");

const userModel = {};

userModel.getUser = async email => {
    try {
        const user = await User.findOne( {email});
        return user;
    } catch(error){
        console.log(error);
        throw error;
    }
}

userModel.createUser = async data => {
    const newUser = await new User(data);
    return newUser.save();
}

userModel.getAllUsers = async () => {
    return await User.find();
}

userModel.update = async(id, data) => {
    const updated = await User.findByIdAndUpdate(id, data);
        
    return updated;
}

userModel.delete = async(id) => {
    return await User.deleteOne(id);
}



module.exports = userModel;