var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
    status:1,
    data:[
      {id:1, nombre:'Carlos', apellido:'Perez'},
      {id:2, nombre:'Carlos', apellido:'Perez'},
      {id:3, nombre:'Carlos', apellido:'Perez'},
      {id:4, nombre:'Carlos', apellido:'Perez'}
    ]
  });
});

//users/1
router.get('/:id',function(req, res, next){
  var idUser = req.params.id; //parametro GET
  //POST req.body.<variable> 

  res
    .status(200)
    .send('Has solicitado el usuario: ' + idUser);

});

router.post('/', function(req, res, next){
  console.log(req.body);

  User.create(req.body, function(err,user){
    if(err){
      res.send({
        status:0,
        mensaje: 'Ocurrio un error',
        err: err,
      });
    }else{
      res.send({
        status:1,
        mensaje: 'usuario creado',
        data:user
      });
    }
  });
});

module.exports = router;
