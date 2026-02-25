import type { Request, Response } from 'express';
import type PetType from '../types/pet.type.js';

const petList: PetType[] = [];

export default class PetController {
  createPet(req: Request, res: Response) {
    const { id, name, age, species, adopted } = req.body;
    const newPet: PetType = { id, name, age, species, adopted };
    petList.push(newPet);

    return res.status(201).json(newPet);
  }
}
