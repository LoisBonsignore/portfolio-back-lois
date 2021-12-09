const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    lastname: { type: String },
    firstname: { type: String },
    email: { type: String },
    message: { type: String }
});

const ContactModel = mongoose.model("Contact", contactSchema)

module.exports = ContactModel; 