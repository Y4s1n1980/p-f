const signoutController = (req, res, next) => {
  try {

    res.clearCookie('token'); 

    res.json({ message: 'Sesión cerrada exitosamente' });
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = signoutController;


  