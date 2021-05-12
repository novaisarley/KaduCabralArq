import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { User } from '../infra/typeorm/entities/User';
import { IUsersRepository } from '../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
  value: number;
}

@injectable()
export class AddValueToWalletService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ user_id, value }: IRequest): Promise<User> {
    const user = await this.usersRepository.findByID(user_id);

    if (!user) throw new AppError('User does not exists');

    const { wallet } = user;

    const newWalletValue = Number(wallet) + value;

    user.wallet = newWalletValue;

    await this.usersRepository.save(user);

    return user;
  }
}
