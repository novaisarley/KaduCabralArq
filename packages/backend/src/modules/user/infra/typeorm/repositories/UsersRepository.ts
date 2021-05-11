import { getRepository, Repository } from 'typeorm';
import { User } from '../entities/User';

class UsersRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }
}

export { UsersRepository };
