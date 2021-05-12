import { FakeHashProvider } from '@shared/container/providers/HashProvider/fakes/FakeHashProvider';
import { AppError } from '@shared/errors/AppError';
import { FakeCodesRepository } from '../repositories/fakes/FakeCodesRepository';

import { FakeUsersRepository } from '../repositories/fakes/FakeUsersRepository';
import { CreateUserService } from './CreateUserService';
import { ShowUserService } from './ShowUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeCodesRepository: FakeCodesRepository;
let fakeHashProvider: FakeHashProvider;

let createUser: CreateUserService;
let showUser: ShowUserService;

describe('ShowUserService', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeCodesRepository = new FakeCodesRepository(fakeUsersRepository);
    fakeHashProvider = new FakeHashProvider();

    createUser = new CreateUserService(
      fakeUsersRepository,
      fakeCodesRepository,
      fakeHashProvider,
    );

    showUser = new ShowUserService(fakeCodesRepository);
  });

  it('should be able to show the user by his code', async () => {
    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
      cellphone: '+5599999999999',
    });

    const code = user.cellphone;

    const returnedUser = await showUser.execute(code);

    expect(returnedUser.name).toBe('John Doe');
    expect(returnedUser.email).toBe('johndoe@example.com');
  });

  it('should not be able to show the user by nonexistent code', async () => {
    await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
      cellphone: '+5599999999999',
    });

    const code = 'nonexistent-code';

    await expect(showUser.execute(code)).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to show a nonexistent user', async () => {
    const code = '+5599999999999';

    await expect(showUser.execute(code)).rejects.toBeInstanceOf(AppError);
  });
});
