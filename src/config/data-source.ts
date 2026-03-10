import { DataSource } from 'typeorm';
import { Adopter } from '../entities/adopter.entity.js';
import { Pet } from '../entities/pet.entity.js';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './src/config/database.sqlite',
  entities: [Pet, Adopter],
  synchronize: true,
});
