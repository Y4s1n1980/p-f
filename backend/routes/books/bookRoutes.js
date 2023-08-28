const express = require('express');
const router = express.Router();
const Book = require('../../models/Book');

// obtener todos los libros
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.error('Error al recuperar los libros:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// agregar nuevo libro
router.post('/', async (req, res) => {
  try {
    const { title, author } = req.body;
    const newBook = new Book({
      title,
      author,
    });
    await newBook.save();
    res.json({ message: 'Libro almacenado con éxito' });
  } catch (error) {
    console.error('Error al almacenar el libro:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;
