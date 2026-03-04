import { Pet } from '../entities/pet.entity.js';

export interface PetRepository {
  getPets(): Promise<Pet[]>;
  createPet(pet: Pet): Promise<void>;
  updatePet(id: number, pet: Pet): Promise<void>;
  deletePet(id: number): Promise<void>;
}
