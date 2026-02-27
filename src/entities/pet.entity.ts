import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import SpeciesEnum from '../enums/species.enum.js';

@Entity()
export default class Pet {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  name!: string;
  @Column()
  species!: SpeciesEnum;
  @Column()
  birthDate!: Date;
  @Column()
  adopted!: boolean;
}
