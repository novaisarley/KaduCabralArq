import { FakeHashProvider } from '@shared/container/providers/HashProvider/fakes/FakeHashProvider';
import { AppError } from '@shared/errors/AppError';
import { FakeEmployeesRepository } from '../repositories/fakes/FakeEmployeeRepository';
import { AuthenticateEmployeeService } from './AuthenticateEmployeeService';
import { CreateEmployeeService } from './CreateEmployeeService';

let fakeEmployeesRepository: FakeEmployeesRepository;
let fakeHashProvider: FakeHashProvider;

let createEmployee: CreateEmployeeService;
let authenticateEmployee: AuthenticateEmployeeService;

describe('AuthenticateEmployee', () => {
  beforeEach(() => {
    fakeEmployeesRepository = new FakeEmployeesRepository();
    fakeHashProvider = new FakeHashProvider();

    createEmployee = new CreateEmployeeService(
      fakeEmployeesRepository,
      fakeHashProvider,
    );

    authenticateEmployee = new AuthenticateEmployeeService(
      fakeEmployeesRepository,
      fakeHashProvider,
    );
  });

  it('should be able to authenticate as regular employee', async () => {
    const employee = await createEmployee.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
      isAdmin: false,
    });

    const response = await authenticateEmployee.execute({
      email: employee.email,
      password: employee.password,
    });

    expect(response).toHaveProperty('token');
    expect(response.employee).toEqual(employee);
  });

  it('should be able to authenticate as admin', async () => {
    const employee = await createEmployee.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
      isAdmin: true,
    });

    const response = await authenticateEmployee.execute({
      email: employee.email,
      password: employee.password,
    });

    expect(response).toHaveProperty('token');
    expect(response.employee).toEqual(employee);
  });

  it('should not be able to authenticate a nonexistent employee', async () => {
    await expect(
      authenticateEmployee.execute({
        email: 'johndoe@example.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate with wrong password', async () => {
    await createEmployee.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
      isAdmin: false,
    });

    await expect(
      authenticateEmployee.execute({
        email: 'johndoe@example.com',
        password: 'wrong-password',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
