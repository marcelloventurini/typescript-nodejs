import { Repository } from 'typeorm';
import { Adopter } from '../entities/adopter.entity.js';
import { AdopterRepository } from './adopter.repository.js';

export class AdopterRepositoryImpl implements AdopterRepository {
  private repository: Repository<Adopter>;

  constructor(repository: Repository<Adopter>) {
    this.repository = repository;
  }

  async getAdopters(): Promise<Adopter[]> {
    return await this.repository.find();
  }

  async getAdopterById(id: number): Promise<Adopter | null> {
    return await this.repository.findOneBy({ id });
  }

  async createAdopter(adopter: Adopter): Promise<void> {
    await this.repository.save(adopter);
  }

  async updateAdopter(id: number, newData: Partial<Adopter>): Promise<Adopter> {
    const adopter = await this.repository.findOneBy({ id });

    if (!adopter) {
      throw new Error('Adotante não encontrado.');
    }

    Object.assign(adopter, newData);
    return await this.repository.save(adopter);
  }

  async deleteAdopter(id: number): Promise<void> {
    const adopter = await this.repository.findOneBy({ id });

    if (!adopter) {
      throw new Error('Adotante não encontrado.');
    }

    await this.repository.remove(adopter);
  }
}
