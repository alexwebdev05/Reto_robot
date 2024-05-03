// app.js

import express from 'express';
import connect from './db/connect.js'; // Assuming this is your database connection module
import router from './routes/web.js'; // Assuming this is your router module
import cors from 'cors';
import bodyParser from 'body-parser';
import passport from 'passport';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Middleware setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

// Database connection
const port = process.env.PORT || '8000';
const URL = process.env.URL || 'mongodb+srv://web:Almi123@reto.y5tm43r.mongodb.net/?retryWrites=true&w=majority&appName=Reto\retos';
connect(URL);

// API routes
app.use(express.json());
app.use('/api', router); // Assuming your API routes are defined in the 'router' module

// Additional routes
app.get('/', (req, res) => {
  return res.send('<h2>Esta es la API del grupo 4, rutas: /api/temperaturas</h2>');
});

import RouterLogin from './controllers/usuarioController.js'; // Assuming this is your user login controller
app.use('/api/users', RouterLogin);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
