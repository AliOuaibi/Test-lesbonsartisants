const mongoose = require('mongoose')

var nameSchema = new mongoose.Schema({
    name: String,
    type: { type: String },
    price: { type: String},
    rating: { type: Number },
    warranty_years: { type: Number },
    available: {
        type: Boolean,
        default: true
    }
});
    
var Product = mongoose.model("products", nameSchema);


module.exports = Product