'use strict'

var Mentor = require('../models/mentor');

function saveMentor(req,res){
	var mentor = new Mentor();
	var params = req.body;

	if(params.dni){
        mentor.dni = params.dni;
		mentor.nombre = params.nombre;
		mentor.apellido_pat = params.apellido_pat;
		mentor.apellido_mat = params.apellido_mat;
        mentor.celular = params.celular;
        mentor.correo = params.correo;

		mentor.save((err,mentorStored) => {
			if(err){
				res.status(500).send({
					menssage: 'Error en el servidor'
				});
			}else{
				if(mentorStored){
					res.status(200).send({
						mentor:mentorStored
					});
				}else{
					res.status(200).send({
						menssage:'No se ha guardado los datos del mentor'
					});
				}
			}
		});
	}else{
		res.status(400).send({
			menssage:'El DNI del mentor es obligatorio'
		});
	}
}

function getMentores(req,res){
	Mentor.find({}).sort({'_id':-1}).exec((err,mentores) => {
		if(err){
				res.status(500).send({
				menssage:'Error en el servidor'
			});
		}else{
			if(mentores){
				res.status(200).send({
					mentores
				});
			}else{
				res.status(404).send({
					menssage:'No existe registro de mentores'
				});
			}
		}
		
	});
}

function getMentor(req,res){
	var mentorId = req.params.id;

	Mentor.findById(mentorId).exec((err,mentor) => { 
		if(err){
				res.status(500).send({
				menssage:'Error en el servidor'
			});
		}else{
			if(mentor){
				res.status(200).send({
					mentor
				});
			}else{
				res.status(404).send({
					menssage:'No existe el mentor'
				});
			}
		}
	});
}

function updateMentor(req,res){
	var mentorId = req.params.id;
	var update = req.body;

	Mentor.findByIdAndUpdate(mentorId,update,{new:true},(err,mentorUpdated) =>{

		if(err){
				res.status(500).send({
				menssage:'Error en el servidor'
			});
		}else{
			if(mentorUpdated){
				res.status(200).send({
					mentor: mentorUpdated
				});
			}else{
				res.status(404).send({
					menssage:'No existe el mentor'
				});
			}
		}
	});
}

function deleteMentor(req,res){
	var mentorId = req.params.id;

	Mentor.findByIdAndRemove(mentorId, (err,mentorRemoved) =>{
		if(err){
				res.status(500).send({
				menssage:'Error en el servidor'
			});
		}else{
			if(mentorRemoved){
				res.status(200).send({
					mentor: mentorRemoved
				});
			}else{
				res.status(404).send({
					menssage:'No existe el mentor'
				});
			}
		}
	});
}

module.exports = {
	saveMentor,
	getMentores,
	getMentor,
	updateMentor,
	deleteMentor
};