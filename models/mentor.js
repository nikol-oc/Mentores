'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MentorSchema = ({
	dni: String,
	nombre: String,
	apellido_pat: String,
    apellido_mat: String,
    celular: String,
    correo: String
});

module.exports = mongoose.model('Mentor',MentorSchema);
