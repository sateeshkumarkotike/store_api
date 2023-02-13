const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const productRouter = require('./routes/productRouter');

// configure cors
app.use(cors());

// configure express for form data
app.use(express.json());

const port = process.env.PORT || 5050;

// configure mongoose 
mongoose.connect(process.env.MONGODB_LOCAL_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then((response)=>{
    console.log('connected to mongodb');
}).catch((err)=>{
    console.error(err);
});

app.use('/api/products',productRouter);


app.listen(port,()=>{
    console.log(` Express Application is running on port ${port}`);
});