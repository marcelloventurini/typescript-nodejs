import { Request, Response } from 'express';
import { AdopterRepository } from '../repositories/adopter.repository.js';

export class AdopterController {
  constructor(private repository: AdopterRepository) {}

  async getAdopters(_: Request, res: Response) {
    const adopters = await this.repository.getAdopters();
    return res.status(200).json(adopters);
  }
}
