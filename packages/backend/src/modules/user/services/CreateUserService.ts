import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../infra/typeorm/entities/User';
import { IUsersRepository } from '../repositories/IUsersRepository';

export class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute({
    name,
    email,
    password,
    cellphone,
    wallet,
  }: ICreateUserDTO): Promise<User> {
    const checkUserExistsByEmail = await this.usersRepository.findByEmail(
      email,
    );

    if (checkUserExistsByEmail) throw new Error('Email already used');

    const checkUserExistsByCellphone =
      await this.usersRepository.findByCellphone(cellphone);

    if (checkUserExistsByCellphone) throw new Error('Cellphone already used');

    const user = await this.usersRepository.create({
      name,
      email,
      password,
      cellphone,
      wallet,
    });

    // @ts-expect-error Security reasons
    delete user.password;

    return user;
  }
}
