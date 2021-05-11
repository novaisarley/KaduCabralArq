import { FakeHashProvider } from '@shared/container/providers/HashProvider/fakes/FakeHashProvider';
import { AppError } from '@shared/errors/AppError';

import { FakeEmployeesRepository } from '../repositories/fakes/FakeEmployeeRepository';
import { CreateEmployeeService } from './CreateEmployeeService';

let fakeEmployeeRepository: FakeEmployeesRepository;
let fakeHashProvider: FakeHashProvider;

let createEmployee: CreateEmployeeService;

describe('CreateEmployeeService', () => {
  beforeEach(() => {
    fakeEmployeeRepository = new FakeEmployeesRepository();
    fakeHashProvider = new FakeHashProvider();

    createEmployee = new CreateEmployeeService(
      fakeEmployeeRepository,
      fakeHashProvider,
    );
  });

  it('should create a new employee', async () => {
    const employee = await createEmployee.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
      isAdmin: false,
    });

    expect(employee.name).toBe('John Doe');
    expect(employee.email).toBe('johndoe@example.com');
  });

  it('should not create a new employee with an used email', async () => {
    await createEmployee.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
      isAdmin: false,
    });

    await expect(
      createEmployee.execute({
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: '123456',
        isAdmin: false,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
