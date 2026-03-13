import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import SpeciesEnum from '../enums/species.enum.js';
import { Adopter } from './adopter.entity.js';

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
  @ManyToOne(() => Adopter, (adopter) => adopter.pet)
  adopter!: Adopter;

  constructor(obj?: Partial<Pet>) {
    if (obj && Object.keys(obj).length > 0) {
      Object.assign(this, obj);
    }
  }
}
