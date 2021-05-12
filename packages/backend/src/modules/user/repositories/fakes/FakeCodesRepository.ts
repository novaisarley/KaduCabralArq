import { Code } from '@modules/user/infra/typeorm/entities/Code';

import { ICodesRepository } from '../ICodesRepository';
import { FakeUsersRepository } from './FakeUsersRepository';

export class FakeCodesRepository implements ICodesRepository {
  private codes: Code[] = [];

  constructor(private fakeUsersRepository: FakeUsersRepository) {}

  public async findByValue(value: string): Promise<Code | undefined> {
    const code = this.codes.find(findCode => findCode.value === value);

    if (!code) return code;

    const user = await this.fakeUsersRepository.findByCellphone(code.value);

    if (!user) return code;

    code.user = user;

    return code;
  }

  public async generateCode(payload: string, user_id: string): Promise<Code> {
    const code = new Code();

    Object.assign(code, {
      user_id,
      value: payload,
    });

    this.codes.push(code);

    return code;
  }
}
