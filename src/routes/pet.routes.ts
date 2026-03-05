import express from 'express';
import { AppDataSource } from '../config/data-source.js';
import PetController from '../controller/pet.controller.js';
import { Pet } from '../entities/pet.entity.js';
import { PetRepositoryImpl } from '../repositories/pet.repository.impl.js';

const petRepository = new PetRepositoryImpl(AppDataSource.getRepository(Pet));
const petController = new PetController(petRepository);
const router = express.Router();

router.post('/pets', (req, res) => petController.createPet(req, res));
router.get('/pets', (req, res) => petController.getPets(req, res));
router.get('/pets/:id', (req, res) => petController.getPetById(req, res));
router.put('/pets/:id', (req, res) => petController.updatePet(req, res));
router.delete('/pets/:id', (req, res) => petController.deletePet(req, res));

export default router;
