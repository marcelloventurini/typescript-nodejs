import { Repository } from 'typeorm';
import { Pet } from '../entities/pet.entity.js';
import { PetRepository } from './pet.repository.js';

export class PetRepositoryImpl implements PetRepository {
  private repository: Repository<Pet>;

  constructor(repository: Repository<Pet>) {
    this.repository = repository;
  }

  async getPets(): Promise<Pet[]> {
    return await this.repository.find();
  }

  async getPetById(id: number): Promise<Pet | null> {
    return await this.repository.findOneBy({ id });
  }

  async createPet(pet: Pet): Promise<void> {
    await this.repository.save(pet);
  }

  async updatePet(id: number, pet: Pet): Promise<void> {
    await this.repository.update(id, pet);
  }

  async deletePet(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
