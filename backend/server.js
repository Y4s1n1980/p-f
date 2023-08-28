const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dbConfig = require('./config/dbConfig');
const app = express();
const PORT = 4000;


dbConfig.connectDatabase()
  .then(() => {
    
    app.use(bodyParser.json());

    
    const authRoutes = require('./routes/authRoutes');
    const bookRoutes = require('./routes/bookRoutes'); 
    app.use('/auth', authRoutes); 
    app.use('/books', bookRoutes); 

    
    app.use((err, req, res, next) => {
      console.error('Error en la aplicación:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
    });

   
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error al conectar a MongoDB:', err);
  });
