import 'reflect-metadata';

import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IHashProvider } from '@shared/container/providers/HashProvider/models/IHashProvider';
import { ICreateEmployeeDTO } from '../dtos/ICreateEmployeeDTO';
import { Employee } from '../infra/typeorm/entities/Employee';
import { IEmployeesRepository } from '../repositories/IEmployeesRepository';

@injectable()
export class CreateEmployeeService {
  constructor(
    @inject('EmployeesRepository')
    private employeesRepository: IEmployeesRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    name,
    email,
    password,
    isAdmin,
  }: ICreateEmployeeDTO): Promise<Employee> {
    const checkEmployeeExists = await this.employeesRepository.findByEmail(
      email,
    );

    if (checkEmployeeExists) throw new AppError('Email already used');

    const hashedPassword = await this.hashProvider.generateHash(password);

    const employee = await this.employeesRepository.create({
      name,
      email,
      password: hashedPassword,
      isAdmin,
    });

    // @ts-expect-error Security Reason
    delete employee.password;

    return employee;
  }
}
