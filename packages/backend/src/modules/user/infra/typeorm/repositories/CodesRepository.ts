import { ICodesRepository } from '@modules/user/repositories/ICodesRepository';
import { getRepository, Repository } from 'typeorm';

import { Code } from '../entities/Code';

class CodesRepository implements ICodesRepository {
  private ormRepository: Repository<Code>;

  constructor() {
    this.ormRepository = getRepository(Code);
  }

  public async findByValue(value: string): Promise<Code | undefined> {
    const code = await this.ormRepository.findOne({
      where: { value },
      relations: ['user'],
    });

    return code;
  }

  public async generateCode(payload: string, user_id: string): Promise<Code> {
    const code = this.ormRepository.create({
      value: payload,
      user_id,
    });

    await this.ormRepository.save(code);

    return code;
  }
}

export { CodesRepository };
