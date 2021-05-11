import { getRepository, Repository } from 'typeorm';

import { Code } from '../entities/Code';

class CodesRepository {
  private ormRepository: Repository<Code>;

  constructor() {
    this.ormRepository = getRepository(Code);
  }
}

export { CodesRepository };
