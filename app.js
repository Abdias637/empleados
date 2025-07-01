const express = require('express');
const mongoose = require('mongoose');
const empleadoRutas = require('./routes/empleado.routes');  // Nota la "s" en routes
const cors = require('cors');
const app = express();
const puerto = process.env.PORT || 4000;

app.use(cors());

// Middleware para parsear JSON (nativo de Express)
app.use(express.json());

// Conexión a MongoDB sin opciones deprecadas
const MONGO_URI =
  process.env.MONGO_URI || 'mongodb://localhost:27017/empleados';
  .then(() => console.log('Conectado a la base de datos MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Rutas
app.use('/api', empleadoRutas);

// Iniciar servidor
app.listen(puerto, () => {
  console.log(`Servidor corriendo en el puerto: ${puerto}`);
});
