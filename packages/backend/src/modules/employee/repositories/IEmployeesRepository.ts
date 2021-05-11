import { ICreateEmployeeDTO } from '../dtos/ICreateEmployeeDTO';
import { Employee } from '../infra/typeorm/entities/Employee';

interface IEmployeesRepository {
  findByEmail(email: string): Promise<Employee | undefined>;
  create(employeeData: ICreateEmployeeDTO): Promise<Employee>;
  // delete(employeeID: string): Promise<void>;
}

export { IEmployeesRepository };
