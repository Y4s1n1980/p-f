const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

exports.verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Token de autenticación no proporcionado' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Token de autenticación inválido' });
    }
    req.userId = decoded.userId;
    next();
  });
};
