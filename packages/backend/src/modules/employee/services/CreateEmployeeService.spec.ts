import { FakeEmployeesRepository } from '../repositories/fakes/FakeEmployeeRepository';
import { CreateEmployeeService } from './CreateEmployeeService';

let fakeEmployeeRepository: FakeEmployeesRepository;

let createEmployee: CreateEmployeeService;

describe('CreateEmployeeService', () => {
  beforeEach(() => {
    fakeEmployeeRepository = new FakeEmployeesRepository();

    createEmployee = new CreateEmployeeService(fakeEmployeeRepository);
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
    ).rejects.toBeInstanceOf(Error);
  });
});
