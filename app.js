'use strict'
var express= require('express');
var bodyParser= require('body-parser');

var app= express();
//cargar rutas
var mentor_routes =require('./routes/mentor');
//body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//rutas base
app.use('/api',mentor_routes);


module.exports = app;