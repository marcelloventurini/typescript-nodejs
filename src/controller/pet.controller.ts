import type { Request, Response } from 'express';
import SpeciesEnum from '../enums/species.enum.js';
import type PetType from '../types/pet.type.js';

const petList: PetType[] = [];

let id = 0;
function generateId() {
  id += 1;
  return id;
}

export default class PetController {
  getPets(req: Request, res: Response) {
    return res.status(200).json(petList);
  }

  createPet(req: Request, res: Response) {
    const { name, birth, species, adopted } = req.body;

    if (!Object.values(SpeciesEnum).includes(species)) {
      return res.status(400).json({ message: 'espécie inválida' });
    }

    const newPet: PetType = { id: generateId(), name, birth, species, adopted };
    petList.push(newPet);

    return res.status(201).json(newPet);
  }

  updatePet(req: Request, res: Response) {
    const { id } = req.params;
    const { name, birth, species, adopted } = req.body;
    const pet = petList.find((pet) => pet.id === Number(id));

    if (!pet) {
      return res.status(404).json({ message: 'pet não encontrado' });
    }

    pet.name = name;
    pet.birth = birth;
    pet.species = species;
    pet.adopted = adopted;
    return res.status(200).json(pet);
  }

  deletePet(req: Request, res: Response) {
    const { id } = req.params;
    const pet = petList.find((pet) => pet.id === Number(id));

    if (!pet) {
      return res.status(404).json({ message: 'pet não encontrado' });
    }

    const index = petList.indexOf(pet);
    petList.splice(index, 1);
    return res.status(204).json({ message: 'pet deletado com sucesso' });
  }
}
