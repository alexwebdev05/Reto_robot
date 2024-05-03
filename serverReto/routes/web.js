import express from 'express';
import TemperaturaController from '../controllers/temperaturaController.js';

const router = express.Router();

router.get('/temperaturas', TemperaturaController.getAllDoc)

export default router