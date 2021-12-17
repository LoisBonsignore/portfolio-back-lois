const mongoose = require("mongoose");

const portfolioSchema = mongoose.Schema({
    title: { type: String },
    image: { type: Array },
    description: { type: String },
    technos: { type: String },
    date: { type: String }
});

const PortfolioModel = mongoose.model("Contact", portfolioSchema)

module.exports = PortfolioModel