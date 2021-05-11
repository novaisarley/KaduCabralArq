import { ICreateUserDTO } from '@modules/user/dtos/ICreateUserDTO';
import { User } from '@modules/user/infra/typeorm/entities/User';

import { IUsersRepository } from '../IUsersRepository';

export class FakeUsersRepository implements IUsersRepository {
  private users: User[] = [];

  public async findByCellphone(cellphone: string): Promise<User | undefined> {
    const user = this.users.find(findUser => findUser.cellphone === cellphone);

    return user;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find(findUser => findUser.email === email);

    return user;
  }

  public async create({
    name,
    email,
    password,
    cellphone,
    wallet,
  }: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, { name, email, password, cellphone, wallet });

    this.users.push(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    const userIndex = this.users.findIndex(findUser => findUser.id === user.id);

    this.users[userIndex] = user;

    return user;
  }
}
