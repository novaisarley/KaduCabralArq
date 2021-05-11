import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../infra/typeorm/entities/User';

export interface IUsersRepository {
  create(userDate: ICreateUserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
  findByCellphone(cellphone: string): Promise<User | undefined>;
  save(user: User): Promise<User>;
}
