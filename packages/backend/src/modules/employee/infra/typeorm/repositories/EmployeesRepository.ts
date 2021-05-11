import { ICreateEmployeeDTO } from 'modules/employee/dtos/ICreateEmployeeDTO';
import { IEmployeesRepository } from 'modules/employee/repositories/IEmployeesRepository';
import { getRepository, Repository } from 'typeorm';
import { Employee } from '../entities/Employee';

class EmployeesRepository implements IEmployeesRepository {
  private ormRepository: Repository<Employee>;

  constructor() {
    this.ormRepository = getRepository(Employee);
  }

  public async findByEmail(email: string): Promise<Employee | undefined> {
    const employee = await this.ormRepository.findOne({ where: { email } });

    return employee;
  }

  public async create({
    name,
    email,
    password,
    isAdmin,
  }: ICreateEmployeeDTO): Promise<Employee> {
    const user = this.ormRepository.create({
      name,
      email,
      password,
      isAdmin,
    });

    await this.ormRepository.save(user);

    return user;
  }
}

export { EmployeesRepository };
