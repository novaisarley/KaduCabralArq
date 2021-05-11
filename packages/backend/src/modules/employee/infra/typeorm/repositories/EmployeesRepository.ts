import { getRepository, Repository } from 'typeorm';
import { Employee } from '../entities/Employee';

class EmployeeRepository {
  private ormRepository: Repository<Employee>;

  constructor() {
    this.ormRepository = getRepository(Employee);
  }
}

export { EmployeeRepository };
