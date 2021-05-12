import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../infra/typeorm/entities/User';

export interface IUsersRepository {
  findByID(user_id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  findByCellphone(cellphone: string): Promise<User | undefined>;
  create(userDate: ICreateUserDTO): Promise<User>;
  save(user: User): Promise<User>;
}
