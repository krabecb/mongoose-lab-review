const mongoose = require("mongoose")
const Schema = mongoose.Schema

const companySchema = new Schema({
    name: {type: String, required: [true, "You must provide a name"]},
    founded: Date,
    employees: Number,
    active: Boolean,
    products: [{type: String}],
    CEO: {
        name: String,
        age: Number,
    },
})

const Company = mongoose.model("Company", companySchema)
module.exports = Company