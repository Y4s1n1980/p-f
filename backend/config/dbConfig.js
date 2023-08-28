require('dotenv').config();
const mongoose = require('mongoose');

const { DB_HOST, DB_PORT, DB_NAME } = process.env;

function connectDatabase() {
  mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Conexión exitosa a MongoDB');
  })
  .catch((err) => {
    console.error('Error al conectar a MongoDB:', err);
  });
}

module.exports = { connectDatabase };
