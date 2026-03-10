import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  @Column({ type: 'varchar' })
  photo!: string;
  @Column({ type: 'varchar' })
  address!: string;

  constructor(obj?: Partial<Adopter>) {
    if (obj && Object.keys(obj).length > 0) {
      Object.assign(this, obj);
    }
  }
}
