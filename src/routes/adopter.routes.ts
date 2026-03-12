import express from 'express';
import { AppDataSource } from '../config/data-source.js';
import { AdopterController } from '../controller/adopter.controller.js';
import { AdopterRepositoryImpl } from '../repositories/adopter.repository.impl.js';

const adopterRepository = new AdopterRepositoryImpl(
  AppDataSource.getRepository('Adopter'),
);
const adopterController = new AdopterController(adopterRepository);
const router = express.Router();

router.get('/adopters', (req, res) => adopterController.getAdopters(req, res));
router.get('/adopters/:id', (req, res) => adopterController.getAdopterById(req, res));
router.post('/adopters', (req, res) => adopterController.createAdopter(req, res));
router.put('/adopters/:id', (req, res) => adopterController.updateAdopter(req, res));

export default router;
