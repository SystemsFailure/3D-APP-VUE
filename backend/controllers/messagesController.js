const {Messages, check_MessagesModel} = require('../database/models/index')
const { Op } = require("sequelize");

async function createMessage(req, res, next) {
    check_MessagesModel();
    try {
        await Messages.create(
            {
                text: req.body.text,
                toId: req.body.toId,
                fromId: req.body.fromId,
            }
        )
        res.send('message was been created successfully');
    } catch(err) {
        console.log(err);
    }

}

module.exports.findAllMessages = async (req, res, next) => {
    console.log(req.body.toId, req.body.fromId, 'found all messages');
    res.send(
        await Messages.findAll(
            {
                where: {
                    toId: {
                        [Op.or]: [req.body.toId, req.body.fromId]
                    },
                    fromId: {
                        [Op.or]: [req.body.toId, req.body.fromId]
                    },
                }
            }
        )
    )
}

module.exports.createMessage = createMessage;