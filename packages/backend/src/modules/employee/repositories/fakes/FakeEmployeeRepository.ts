import { ICreateEmployeeDTO } from 'modules/employee/dtos/ICreateEmployeeDTO';
import { Employee } from '../../infra/typeorm/entities/Employee';
import { IEmployeesRepository } from '../IEmployeesRepository';

class FakeEmployeesRepository implements IEmployeesRepository {
  private employees: Employee[] = [];

  public async findByEmail(email: string): Promise<Employee | undefined> {
    const employee = this.employees.find(
      findEmployee => findEmployee.email === email,
    );

    return employee;
  }

  public async create({
    name,
    email,
    password,
    isAdmin,
  }: ICreateEmployeeDTO): Promise<Employee> {
    const employee = new Employee();

    Object.assign(employee, {
      name,
      email,
      password,
      isAdmin,
    });

    this.employees.push(employee);

    return employee;
  }

  public async delete(): Promise<void> {}
}

export { FakeEmployeesRepository };
