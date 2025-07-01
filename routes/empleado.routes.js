const express = require('express');
const empleadoRutas = express.Router();

const Empleado = require('../backend/models/Empleado'); // Asegúrate que la ruta y nombre coincidan

// Crear un empleado
empleadoRutas.route('/agregar').post((req, res) => {
  Empleado.create(req.body)
    .then(data => {
      console.log("Se insertó correctamente el documento");
      res.status(201).send(data);
    })
    .catch(error => {
      console.error(error);
      res.status(400).send({ error: error.message });
    });
});

// Obtener todos los empleados
empleadoRutas.route('/empleados').get((req, res) => {
  Empleado.find()
    .then(data => res.send(data))
    .catch(error => {
      console.error(error);
      res.status(500).send({ error: error.message });
    });
});

// Obtener un empleado por id
empleadoRutas.route('/empleado/:id').get((req, res) => {
  Empleado.findById(req.params.id)
    .then(data => {
      if (!data) return res.status(404).send({ message: 'Empleado no encontrado' });
      res.send(data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send({ error: error.message });
    });
});

// Actualizar un empleado
empleadoRutas.route('/actualizar/:id').put((req, res) => {
  Empleado.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    .then(data => {
      if (!data) return res.status(404).send({ message: 'Empleado no encontrado' });
      console.log('Se actualizó correctamente el documento');
      res.send(data);
    })
    .catch(error => {
      console.error(error);
      res.status(400).send({ error: error.message });
    });
});

// Eliminar un empleado
empleadoRutas.route('/eliminar/:id').delete((req, res) => {
  Empleado.findByIdAndDelete(req.params.id)
    .then(data => {
      if (!data) return res.status(404).send({ message: 'Empleado no encontrado' });
      console.log('Se eliminó correctamente');
      res.send({ message: 'Empleado eliminado' });
    })
    .catch(error => {
      console.error(error);
      res.status(500).send({ error: error.message });
    });
});

module.exports = empleadoRutas;
