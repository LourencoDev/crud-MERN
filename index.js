const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/AlienDB';

const app = express();

mongoose.connect(url, {useNewUrlParser:true});
const cursor = mongoose.connection;

cursor.on('open', function(){
    console.log('connected...');
})