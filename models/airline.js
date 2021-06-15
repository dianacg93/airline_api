const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Airline = new Schema(
    {
        name: {type: String, required: true},
        headquarters: {type: String, required: true},
        airline_code: {type: String, required: true},
        website: {type: String, required: true},
    },
    {timestamps: true}
)

module.exports = mongoose.model('airlines', Airline);