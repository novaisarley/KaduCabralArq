import { Code } from '@modules/user/infra/typeorm/entities/Code';

import { ICodesRepository } from '../ICodesRepository';

export class FakeCodesRepository implements ICodesRepository {
  private codes: Code[] = [];

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
