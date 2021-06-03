'use strict'

var express = require('express');
var MentorController =require('../controllers/mentor');

var api = express.Router();

api.post('/mentor', MentorController.saveMentor);
api.get('/mentores', MentorController.getMentores);
api.get('/mentor/:id', MentorController.getMentor);
api.put('/mentor/:id', MentorController.updateMentor);
api.delete('/mentor/:id', MentorController.deleteMentor);

module.exports = api;