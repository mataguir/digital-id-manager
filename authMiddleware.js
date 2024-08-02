// const jwt = require('jsonwebtoken');

// const authenticateToken = (req, res, next) => {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1]; // El token suele estar en la forma 'Bearer TOKEN'

//   if (token == null) return res.sendStatus(401); // Si no hay token, respuesta 401

//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403); // Si el token no es válido, respuesta 403
//     req.user = user; // Agrega el usuario decodificado al objeto request
//     next(); // Continua al siguiente middleware o ruta
//   });
// };

// module.exports = authenticateToken;
