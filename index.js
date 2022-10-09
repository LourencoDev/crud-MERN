const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1/AlienDB';

const app = express();

mongoose.connect(url, {useNewUrlParser: true})
const cursor = mongoose.connection

cursor.on('open', function(){
    console.log('connected...')
})

//If mongodb error is comming, chk to see if mongodb service is running
//To run the module, command: npm run dev

//Import json to process json data
app.use(express.json());

//Create route for aliens
const alienRouter = require('./routes/aliens')
app.use('/aliens', alienRouter)

//Start listening on port 9000
app.listen(9000, () => console.log("server started..."))