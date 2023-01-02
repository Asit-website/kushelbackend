require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api',require('./Router/contactRouter'));

// Database Connection
const URI = process.env.MONGODB_URL
mongoose.connect(URI,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(()=>{
    console.log("connection successfull");
}).catch((err)=>{
    console.log(err);
})


// Connecting to Server
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log('server is runing on port',port);
})