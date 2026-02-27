import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import SpeciesEnum from '../enums/species.enum.js';

@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({ type: 'varchar' })
  name!: string;
  @Column({ type: 'varchar' })
  species!: SpeciesEnum;
  @Column({ type: 'datetime' })
  birthDate!: Date;
  @Column({ type: 'boolean' })
  adopted!: boolean;
}
