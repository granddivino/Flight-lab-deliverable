const mongoose = require('mongoose')

const Passenger = mongoose.model (
    "Passenger",
    new mongoose.Schema({
        firstName: String,
        lastName: String, 
        dob: DATE,
    })
)

module.exports = Passenger