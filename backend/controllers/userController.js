const { cError } = require('../views/error/cError');
const {User} = require('../database/models');

async function createUser(req, res, next) {
    if(req.body && req.body != undefined && req.body != {}) {

        if (req.body.name && req.body.email) {

            await User.create(
                {
                    userName: req.body.name,
                    userEmail: req.body.email,
                    hsPassword: req.body.password,
                }
            )
            res.send({message: 'User was been created', result: true});

        } else {
            res.send({message: 'field name and email is dont exists', result: false});
        }

    } else {
        res.send('User dont add to base!');
    }
}

function getUser(req, res, next) {
    res.send('Get user successfully');
}

async function getUserByEmail(email, password) {
    return await User.findOne(
        {
            where: {
                userEmail: email,
                hsPassword: password,
            }
        }
    )
}

module.exports.authUser = async (req, res, next) => {
    const userEmail = req.body.email;
    const hashPassword = req.body.password;

    const user = await getUserByEmail(userEmail, hashPassword);
    if(user) {
        res.send({message : 'auth true', user: user, result: true});
    } else {
        cError.set.call(
            cError, 
            [
                'Table not found',
                'User not in base', 
                req.statusCode, 
                req.header, 
                req.method, 
                User,
                req.body
            ]
        )
        res.send({message : 'auth false', user: user, result: true});
    }
    
}

module.exports.createUser = createUser
module.exports.getUser = getUser