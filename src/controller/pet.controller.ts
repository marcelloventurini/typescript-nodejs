import type { Request, Response } from 'express';
import { Pet } from '../entities/pet.entity.js';
import SpeciesEnum from '../enums/species.enum.js';
import { PetRepository } from '../repositories/pet.repository.js';
// import type PetType from '../types/pet.type.js';

// const petList: PetType[] = [];

let id = 0;
function generateId() {
  id += 1;
  return id;
}

export default class PetController {
  constructor(private repository: PetRepository) {}

  async getPets(_: Request, res: Response) {
    const pets = await this.repository.getPets();
    return res.status(200).json(pets);
  }

  async createPet(req: Request<{}, {}, Pet>, res: Response) {
    const { name, birthDate, species, adopted } = req.body;

    if (!Object.values(SpeciesEnum).includes(species)) {
      return res.status(400).json({ message: 'espécie inválida' });
    }

    const newPet = new Pet();
    newPet.id = generateId();
    newPet.name = name;
    newPet.birthDate = birthDate;
    newPet.species = species;
    newPet.adopted = adopted;

    await this.repository.createPet(newPet);

    return res.status(201).json(newPet);
  }

  async updatePet(req: Request<{ id: string }, {}, Pet>, res: Response) {
    const { id } = req.params;
    const { name, birthDate, species, adopted } = req.body;
    const pet = await this.repository.getPetById(Number(id));

    if (!pet) {
      return res.status(404).json({ message: 'pet não encontrado' });
    }

    pet.name = name;
    pet.birthDate = birthDate;
    pet.species = species;
    pet.adopted = adopted;

    await this.repository.updatePet(Number(id), pet);

    return res.status(200).json(pet);
  }

  async deletePet(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params;
    const pet = await this.repository.getPetById(Number(id));

    if (!pet) {
      return res.status(404).json({ message: 'pet não encontrado' });
    }

    await this.repository.deletePet(Number(id));
    return res.status(200).json({ message: 'pet deletado com sucesso' });
  }
}
