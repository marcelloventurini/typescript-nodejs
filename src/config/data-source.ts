import { DataSource } from 'typeorm';
import { Pet } from '../entities/pet.entity.js';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './src/config/database.sqlite',
  entities: [Pet],
  synchronize: true,
});
