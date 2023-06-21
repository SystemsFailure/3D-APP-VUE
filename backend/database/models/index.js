const { DataTypes } = require('sequelize');
const { sequelize } = require('../main');

const User = sequelize.define('User', 
    {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "undefined",
        },
        userEmail: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "undefined",
        },
        hsPassword: {
            type: DataTypes.STRING(500),
            allowNull: false,
            defaultValue: "undefined",
        }
    }
)

const Messages = sequelize.define('Messages', 
    {
        text: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "undefined",
        },
    }
)

function check_UserModel() {
    console.log(User === sequelize.models.User);
}

function check_MessagesModel() {
    console.log(User === sequelize.models.User);
}





module.exports.User = User;
module.exports.check_UserModel = check_UserModel;

module.exports.Messages = Messages;
module.exports.check_MessagesModel = check_MessagesModel;