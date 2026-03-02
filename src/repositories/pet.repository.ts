import { Pet } from '../entities/pet.entity.js';

export interface PetRepository {
  getPets(): Pet[];
  createPet(pet: Pet): void;
  updatePet(id: number, pet: Pet): void;
  deletePet(id: number): void;
}
