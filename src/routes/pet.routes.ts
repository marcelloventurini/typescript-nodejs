import express from 'express';
import PetController from '../controller/pet.controller.js';

const petController = new PetController();
const router = express.Router();

router.post('/pets', petController.createPet);
router.get('/pets', petController.getPets);

export default router;
