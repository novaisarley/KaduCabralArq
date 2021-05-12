import { FakeHashProvider } from '@shared/container/providers/HashProvider/fakes/FakeHashProvider';
import { AppError } from '@shared/errors/AppError';
import { FakeCodesRepository } from '../repositories/fakes/FakeCodesRepository';

import { FakeUsersRepository } from '../repositories/fakes/FakeUsersRepository';
import { CreateUserService } from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let fakeCodesRepository: FakeCodesRepository;

let createUser: CreateUserService;

describe('CreateUserService', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();
    fakeCodesRepository = new FakeCodesRepository();

    createUser = new CreateUserService(
      fakeUsersRepository,
      fakeCodesRepository,
      fakeHashProvider,
    );
  });

  it('should be able to create a new user', async () => {
    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
      cellphone: '+5599999999999',
    });

    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('johndoe@example.com');
  });

  it('should not be able to create a new user with an used email', async () => {
    await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
      cellphone: '+5599999999999',
    });

    await expect(
      createUser.execute({
        name: 'Jenny Doe',
        email: 'johndoe@example.com',
        password: '123456',
        cellphone: '+5588888888888',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create a new user with an used cellphone', async () => {
    await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
      cellphone: '+5599999999999',
    });

    await expect(
      createUser.execute({
        name: 'Jenny Doe',
        email: 'jonnydoe@example.com',
        password: '123456',
        cellphone: '+5599999999999',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
