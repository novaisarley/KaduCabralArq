import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import { User } from './User';

@Entity('codes')
export class Code {
  @PrimaryColumn()
  id: string;

  @Column()
  value: string;

  @Column()
  userID: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'userID' })
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
