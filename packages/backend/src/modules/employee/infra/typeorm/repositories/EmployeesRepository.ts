import { IEmployeesRepository } from 'modules/employee/repositories/IEmployeesRepository';
import { getRepository, Repository } from 'typeorm';
import { Employee } from '../entities/Employee';

class EmployeesRepository implements IEmployeesRepository {
  private ormRepository: Repository<Employee>;

  constructor() {
    this.ormRepository = getRepository(Employee);
  }

  public async create(): Promise<Employee> {}
}

export { EmployeesRepository };
