import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { User } from '../infra/typeorm/entities/User';
import { ICodesRepository } from '../repositories/ICodesRepository';

@injectable()
export class ShowUserService {
  constructor(
    @inject('CodesRepository')
    private codesRepository: ICodesRepository,
  ) {}

  public async execute(code: string): Promise<User> {
    const userCode = await this.codesRepository.findByValue(code);

    if (!userCode) throw new AppError('Code not exists');

    const { user } = userCode;

    // @ts-expect-error Security Reason
    delete user.password;

    return user;
  }
}
