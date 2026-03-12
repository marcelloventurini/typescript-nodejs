import type { Request, Response } from 'express';
import { Pet } from '../entities/pet.entity.js';
import { PetRepository } from '../repositories/pet.repository.js';

export default class PetController {
  constructor(private repository: PetRepository) {}

  async getPets(_: Request, res: Response) {
    const pets = await this.repository.getPets();
    return res.status(200).json(pets);
  }

  async getPetById(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params;
    const pet = await this.repository.getPetById(Number(id));

    if (!pet) {
      return res.status(404).json({ message: 'pet não encontrado' });
    }

    return res.status(200).json(pet);
  }

  async createPet(req: Request<{}, {}, Pet>, res: Response) {
    try {
      const { name, birthDate, species, adopted } = req.body;
      const newPet = new Pet({ name, birthDate, species, adopted });
      await this.repository.createPet(newPet);

      return res.status(201).json(newPet);
    } catch (error: any) {
      if (error.message === 'Espécie inválida.') {
        return res.status(400).json({ message: error.message });
      }

      return res.status(500).json({ message: 'Erro ao criar pet' });
    }
  }

  async updatePet(
    req: Request<{ id: string }, {}, Partial<Pet>>,
    res: Response,
  ) {
    try {
      const { id } = req.params;
      const updatedPet = await this.repository.updatePet(Number(id), req.body);

      return res.status(200).json(updatedPet);
    } catch (error: any) {
      if (error.message === 'Pet não encontrado.') {
        return res.status(404).json({ message: error.message });
      }

      return res.status(500).json({ message: 'Erro ao atualizar pet' });
    }
  }

  async deletePet(req: Request<{ id: string }>, res: Response) {
    try {
      const { id } = req.params;

      await this.repository.deletePet(Number(id));
      return res.status(200).json({ message: 'pet deletado com sucesso' });
    } catch (error: any) {
      if (error.message === 'Pet não encontrado.') {
        return res.status(404).json({ message: error.message });
      }

      return res.status(500).json({ message: 'Erro ao deletar pet' });
    }
  }
}
