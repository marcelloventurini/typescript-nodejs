import { Pet } from '../entities/pet.entity.js';

export interface PetRepository {
  getPets(): Promise<Pet[]>;
  getPetById(id: number): Promise<Pet | null>;
  createPet(pet: Pet): Promise<void>;
  updatePet(id: number, newData: Partial<Pet>): Promise<Pet>;
  deletePet(id: number): Promise<void>;
}
