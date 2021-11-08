const User = require("./userSchema");

const userModel = {};

userModel.getUser = async email => {
    const user = await User.findOne( {email});
    return user;
}

userModel.createUser = async data => {
    const newUser = await new User(data);
    newUser.save();
    return {
        status: true,
        message: 'The user ${data.email} was created correctly'
    }
}



module.exports = userModel;