import { Repository } from 'typeorm';
import { Pet } from '../entities/pet.entity.js';
import SpeciesEnum from '../enums/species.enum.js';
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
    if (!Object.values(SpeciesEnum).includes(pet.species)) {
      throw new Error('Espécie inválida.');
    }

    await this.repository.save(pet);
  }

  async updatePet(id: number, newData: Partial<Pet>): Promise<Pet> {
    const pet = await this.repository.findOneBy({ id });
    if (!pet) {
      throw new Error('Pet não encontrado.');
    }
    Object.assign(pet, newData);
    return await this.repository.save(pet);
  }

  async deletePet(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
