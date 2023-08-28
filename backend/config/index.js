const express = require('express');
const bodyParser = require('body-parser');
const cors = require('./config/cors'); // Importa el middleware de CORS que creaste
const app = express();
const PORT = 4000;

app.use(cors);

app.use(bodyParser.json());

const authRoutes = require('./routes/authRoutes');
const bookRoutes = require('./routes/bookRoutes'); 
app.use('/auth', authRoutes);
app.use('/books', bookRoutes);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error('Error en la aplicación:', err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

