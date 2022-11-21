const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    takenDate: {
        type: String,
        required: true
    },
    returnDate:{
        type: String,
        required:true
    }
})

let BookDATA = mongoose.model('bookdetail', BookSchema)

module.exports = BookDATA