const mongoose = require('mongoose');


const RestaurantsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    coordinates: {
        type: { type: String },
        coordinates: [Number],
    },
    address:{
        type: String,
        required: true
    }
},{
    timestamps: true
});


RestaurantsSchema.index({ "coordinates": "Point" });



module.exports = Restaurants = mongoose.model('Restaurants', RestaurantsSchema);
