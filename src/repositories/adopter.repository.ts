import { Adopter } from "../entities/adopter.entity.js";

export interface AdopterRepository {
  getAdopters(): Promise<Adopter[]>;
  getAdopterById(id: number): Promise<Adopter | null>;
  createAdopter(adopter: Adopter): Promise<void>;
  updateAdopter(id: number, newData: Partial<Adopter>): Promise<Adopter>;
  deleteAdopter(id: number): Promise<void>;
}
