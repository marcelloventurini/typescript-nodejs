import { Repository } from 'typeorm';
import { Pet } from '../entities/pet.entity.js';
import { PetRepository } from './pet.repository.js';

export class PetRepositoryImpl implements PetRepository {
  private repository: Repository<Pet>;

  constructor(repository: Repository<Pet>) {
    this.repository = repository;
  }

  getPets(): Pet[] {
    throw new Error('Method not implemented.');
  }
  createPet(pet: Pet): void {
    this.repository.save(pet);
  }
  updatePet(id: number, pet: Pet): void {
    throw new Error('Method not implemented.');
  }
  deletePet(id: number): void {
    throw new Error('Method not implemented.');
  }
}
