const mongoose = require('mongoose');
const protocolMongo= "mongodb";
const hostMongo = "localhost";
const portMongo = "27017";
const mongoName = "contact";

const DB_URI = process.env.MONGO_URL || `${protocolMongo}://${hostMongo}:${portMongo}/${mongoName}`

mongoose.connect(DB_URI).then(() => {
    console.log(`*** CONNECTED TO ${DB_URI} ***`)
})