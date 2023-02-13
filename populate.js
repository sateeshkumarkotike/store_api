require('dotenv').config()
const mongoose = require('mongoose');

const Product = require('./models/Product');
const jsonProducts = require('./products.json');

const start = async ()=>{
    try {
        // configure mongoose 
        mongoose.connect(process.env.MONGODB_LOCAL_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        }).then((response)=>{
            console.log('connected to mongodb');
        }).catch((err)=>{
            console.error(err);
        });
        
        await Product.deleteMany();
        await Product.create(jsonProducts);
        console.log('Success');
    } catch (error) {
        console.log(error);
    }
};

start();

