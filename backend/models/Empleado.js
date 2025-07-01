const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmpleadoSchema = new Schema({
  nombre: { type: String, required: true },
  departamento: { type: String, required: true },
  email: { type: String, required: true },
  telefono: { type: Number, required: true }
}, {
  collection: 'empleados'
});

module.exports = mongoose.model('Empleado', EmpleadoSchema);
