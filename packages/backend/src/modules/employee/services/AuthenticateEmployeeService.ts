import { IHashProvider } from '@shared/container/providers/HashProvider/models/IHashProvider';
import { AppError } from '@shared/errors/AppError';
import { Secret, sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';
import authConfig from '@config/auth';
import { Employee } from '../infra/typeorm/entities/Employee';
import { IEmployeesRepository } from '../repositories/IEmployeesRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  employee: Employee;
  token: string;
}

@injectable()
export class AuthenticateEmployeeService {
  constructor(
    @inject('EmployeesRepository')
    private employeesRepository: IEmployeesRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const employee = await this.employeesRepository.findByEmail(email);

    if (!employee) throw new AppError('Invalid email or password', 401);

    const hasPasswordMatched = await this.hashProvider.compareHash(
      password,
      employee.password,
    );

    if (!hasPasswordMatched)
      throw new AppError('Invalid email or password', 401);

    // Employee authenticated

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign(
      {
        type: employee.isAdmin ? 'admin' : 'employee',
      },
      secret as Secret,
      {
        subject: employee.id,
        expiresIn,
      },
    );

    return {
      employee,
      token,
    };
  }
}
