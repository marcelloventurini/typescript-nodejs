import { Request, Response } from 'express';
import { Adopter } from '../entities/adopter.entity.js';
import { AdopterRepository } from '../repositories/adopter.repository.js';

export class AdopterController {
  constructor(private repository: AdopterRepository) {}

  async getAdopters(_: Request, res: Response) {
    const adopters = await this.repository.getAdopters();
    return res.status(200).json(adopters);
  }

  async getAdopterById(req: Request<{ id: string }>, res: Response) {
    const { id } = req.params;
    const adopter = await this.repository.getAdopterById(Number(id));

    if (!adopter) {
      return res.status(404).json({ message: 'Adotante não encontrado' });
    }

    return res.status(200).json(adopter);
  }

  async createAdopter(req: Request<{}, {}, Adopter>, res: Response) {
    try {
      const { name, password, phone, photo, address } = req.body;
      const newAdopter = new Adopter({ name, password, phone, photo, address });
      await this.repository.createAdopter(newAdopter);

      return res.status(201).json(newAdopter);
    } catch (error) {
      return res.status(400).json({ message: 'Erro ao criar adotante' });
    }
  }
}
