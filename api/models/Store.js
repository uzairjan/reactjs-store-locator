const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// Schema for store locator

const StoreSchema = new Schema({
    storeId: {
        type:String,
        required: [true, "Please add a store ID"],
        unique : true,
        trim   : true,
        maxlength: [10, "Store ID must be less than 10 chars"]
    },
    address : {
        type: String,
        required: [true, "Please add an address"]
    },
    location: {
        type:{
            type: String,
            enum: ['Point'],
        },
        coordinates : {
            type: [Number],
            index: '2dsphere',
        },
        formattedAddress: String,
    },
    createdAt : {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Store', StoreSchema);