const mongoose= require('mongoose');

const ProductSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    created: {
        type: Date,
        required: true
    },
    updated: {
        type: Date
    }
});

module.exports= Product= mongoose.model('Product', ProductSchema);