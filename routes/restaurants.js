const Router = require('express').Router();


const Restaurant = require('../models/Restaurants');



// POST - Create restaurant 


Router.post('/' ,async (req,res)=>{
    try{
        const restaurant = {...req.body};
        const createRestaurant = await Restaurant.create(restaurant);
        if(!createRestaurant){
            throw new Error('Error creating restaurant');
        };
        res.json({
            success: true,
            message:'Restaurant Created', 
            restaurant: createRestaurant.toJSON()
        })


    }catch(e){
        
    }
})



// GET


Router.get('/', async (req,res)=>{
    try{
        const restaurants = await Restaurant.find();

        res.json({restaurants, success: true})
    }catch(e){}
})



module.exports = Router;