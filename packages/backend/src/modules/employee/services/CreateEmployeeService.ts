import { ICreateEmployeeDTO } from '../dtos/ICreateEmployeeDTO';
import { Employee } from '../infra/typeorm/entities/Employee';
import { IEmployeesRepository } from '../repositories/IEmployeesRepository';

export class CreateEmployeeService {
  constructor(private employeesRepository: IEmployeesRepository) {}

  public async execute({
    name,
    email,
    password,
    isAdmin,
  }: ICreateEmployeeDTO): Promise<Employee> {
    const checkEmployeeExists = await this.employeesRepository.findByEmail(
      email,
    );

    if (checkEmployeeExists) throw new Error('Email already used');

    const employee = await this.employeesRepository.create({
      name,
      email,
      password,
      isAdmin,
    });

    return employee;
  }
}
