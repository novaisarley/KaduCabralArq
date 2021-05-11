import {
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  Entity,
  PrimaryColumn,
} from 'typeorm';

import { v4 as uuid } from 'uuid';

@Entity('employees')
class Employee {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  isAdmin: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Employee };
