import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Pet } from './pet.entity.js';

@Entity()
export class Adopter {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column({ type: 'varchar' })
  name!: string;
  @Column({ type: 'varchar' })
  password!: string;
  @Column({ type: 'varchar' })
  phone!: string;
  @Column({ type: 'varchar', nullable: true })
  photo?: string | undefined;
  @Column({ type: 'varchar', nullable: true })
  address?: string | undefined;
  @OneToMany(() => Pet, (pet) => pet.adopter)
  pet!: Pet[];

  constructor(obj?: Partial<Adopter>) {
    if (obj && Object.keys(obj).length > 0) {
      Object.assign(this, obj);
    }
  }
}
