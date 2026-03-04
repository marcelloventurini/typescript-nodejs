import { Repository } from 'typeorm';
import { Pet } from '../entities/pet.entity.js';
import { PetRepository } from './pet.repository.js';

export class PetRepositoryImpl implements PetRepository {
  private repository: Repository<Pet>;

  constructor(repository: Repository<Pet>) {
    this.repository = repository;
  }

  async getPets(): Promise<Pet[]> {
    throw new Error('Method not implemented.');
  }

  async createPet(pet: Pet): Promise<void> {
    await this.repository.save(pet);
  }

  async updatePet(id: number, pet: Pet): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async deletePet(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
