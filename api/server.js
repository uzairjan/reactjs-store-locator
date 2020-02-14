const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const logger = require('morgan');

mongoose.connect('mongodb://localhost:27017/store',{useNewUrlParser:true, useFindAndModify: false, useUnifiedTopology:true});
const app = express();
app.use(logger('dev'));

app.use(express.json());
app.use('/api/v1/store', require('./routes/routes'));




app.listen(5000,() => console.log('port is listening'))