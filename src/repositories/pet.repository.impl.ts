import { Repository } from 'typeorm';
import { Pet } from '../entities/pet.entity.js';
import SpeciesEnum from '../enums/species.enum.js';
import { PetRepository } from './pet.repository.js';
import { Adopter } from '../entities/adopter.entity.js';

export class PetRepositoryImpl implements PetRepository {
  private petRepository: Repository<Pet>;
  private adopterRepository: Repository<Adopter>;

  constructor(petRepository: Repository<Pet>, adopterRepository: Repository<Adopter>) {
    this.petRepository = petRepository;
    this.adopterRepository = adopterRepository;
  }

  async getPets(): Promise<Pet[]> {
    return await this.petRepository.find();
  }

  async getPetById(id: number): Promise<Pet | null> {
    return await this.petRepository.findOneBy({ id });
  }

  async createPet(pet: Pet): Promise<void> {
    if (!Object.values(SpeciesEnum).includes(pet.species)) {
      throw new Error('Espécie inválida.');
    }

    await this.petRepository.save(pet);
  }

  async updatePet(id: number, newData: Partial<Pet>): Promise<Pet> {
    const pet = await this.petRepository.findOneBy({ id });
    if (!pet) {
      throw new Error('Pet não encontrado.');
    }
    Object.assign(pet, newData);
    return await this.petRepository.save(pet);
  }

  async deletePet(id: number): Promise<void> {
    const pet = await this.petRepository.findOneBy({ id });

    if (!pet) {
      throw new Error('Pet não encontrado.');
    }

    await this.petRepository.remove(pet);
  }

  async adoptPet(petId: number, adopterId: number): Promise<Pet> {
    const pet = await this.petRepository.findOneBy({ id: petId });
    const adopter = await this.adopterRepository.findOneBy({ id: adopterId });

    if (!pet) {
      throw new Error('Pet não encontrado.');
    }

    if (!adopter) {
      throw new Error('Adotante não encontrado.');
    }

    pet.adopter = adopter;
    pet.adopted = true;
    return await this.petRepository.save(pet);
  }
}
