import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IUsersRepository } from '../repositories/IUsersRepository';

@injectable()
export class ShowUserWalletService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(user_id: string): Promise<number> {
    const user = await this.usersRepository.findByID(user_id);

    if (!user) throw new AppError('User not found', 404);

    const user_wallet = Number(user.wallet);

    return user_wallet;
  }
}
