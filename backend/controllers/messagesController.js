const {Messages, check_MessagesModel} = require('../database/models/index')

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
    res.send( 
        await Messages.findAll(
            {
                where: {
                    toId: req.body.toId,
                    fromId: req.body.fromId,
                }
            }
        )
    )
}

module.exports.createMessage = createMessage;