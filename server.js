// const express = require('express');
// const jwt = require('jsonwebtoken');
// const authenticateToken = require('./authMiddleware');
// require('dotenv').config();

// const app = express();
// app.use(express.json());

// // login
// app.post(`${process.env.API_URL}/login`, (req, res) => {
//   const { email, password } = req.body;

//   // Suponiendo que la autenticación es exitosa
//   const user = { email };

//   const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
//   res.json({ accessToken });
// });

// // Ruta protegida
// app.get(`${process.env.API_URL}/profile`, authenticateToken, (req, res) => {
//   res.json({ id: 1, name: 'John Doe', email: req.user.email });
// });

// app.listen(5000, () => {
//   console.log('Server running on port 5000');
// });
