import { IHashProvider } from '@shared/container/providers/HashProvider/models/IHashProvider';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

import { User } from '../infra/typeorm/entities/User';
import { ICodesRepository } from '../repositories/ICodesRepository';
import { IUsersRepository } from '../repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
  cellphone: string;
}

@injectable()
export class CreateUserService {
  private readonly defaultWalletValue: number = 0.0;

  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('CodesRepository')
    private codesRepository: ICodesRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    name,
    email,
    password,
    cellphone,
  }: IRequest): Promise<User> {
    const checkUserExistsByEmail = await this.usersRepository.findByEmail(
      email,
    );

    if (checkUserExistsByEmail) throw new AppError('Email already used');

    const checkUserExistsByCellphone =
      await this.usersRepository.findByCellphone(cellphone);

    if (checkUserExistsByCellphone)
      throw new AppError('Cellphone already used');

    const hashedPassword = await this.hashProvider.generateHash(password);

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
      cellphone,
      wallet: this.defaultWalletValue,
    });

    await this.codesRepository.generateCode(cellphone, user.id);

    // @ts-expect-error Security Reason
    delete user.password;

    return user;
  }
}
