const mongoose = require('mongoose');

const custSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const CRM = mongoose.model('CRM', custSchema)

module.exports = CRM