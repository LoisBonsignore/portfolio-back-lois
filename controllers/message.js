const Contact = require("../models/message")

const post = {
    newContact(req, res, next) {

        let { lastname, firstname, email, message } = req.body;

        if(!lastname || !firstname || !email || !message) {res.send("emptyfield")};

        Contact.create({
            lastname,
            firstname,
            email,
            message
        }).then(() => res.send("message sent"))
        .catch((err) => res.send(err))
    }
}

module.exports = post;