require('dotenv').config()


const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const restaurantRoute = require('./routes/restaurants')


const PORT = process.env.PORT;

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))


app.use('/api/restaurants', restaurantRoute)



mongoose.connect(process.env.DB_URL);


app.listen(PORT, ()=> console.log(`running ong PORT ${PORT}`))