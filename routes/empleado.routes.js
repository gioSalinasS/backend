const express = require('express')
const empleadoRouter = express.Router()

//declaramos el objeto del modelo
let empleado = require('../models/empleado')

//agregar un empleado nuevo con método post
empleadoRouter.route('/agregar').post((req,res)=>{
    empleado.create(req.body)
    .then((data)=>{
        console.log('Se inserto un empleado')
        res.send(data)
    })
    .catch((error)=>{
        console.error(error)
    })
})

//obtener todos los empleados de la BD con método get
empleadoRouter.route('/empleados').get((req,res)=>{
    empleado.find()
    .then((data)=>{
        res.send(data)
    })
    .catch((error)=>{
        console.error(error)
    })
})

//obtenemos un solo empleado por su ID
empleadoRouter.route('/empleado/:id').get((req,res)=>{
    empleado.findById(req.params.id)
    .then((data)=>{
        res.send(data)
    })
    .catch((error)=>{
        console.error(error)
    })
})


//actualizar un empleado
empleadoRouter.route('/actualizar/:id').put((req,res)=>{
    empleado.findByIdAndUpdate(req.params.id,{
        $set: req.body
    })
    .then((data)=>{
        res.send(data)
    })
    .catch((error)=>{
        console.error(error)
    })
})


//eliminar un empleado
empleadoRouter.route('/delete/:id').delete((req,res)=>{
    empleado.findByIdAndDelete(req.params.id)
    .then((data)=>{
        console.log('Se eliminó el empleado')
        res.send(data)
    })
    .catch((error)=>{
        console.error(error)
    })
})

module.exports = empleadoRouter;
