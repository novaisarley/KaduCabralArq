import { FakeUsersRepository } from '../repositories/fakes/FakeUsersRepository';
import { CreateUserService } from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;

let createUser: CreateUserService;

describe('CreateUserService', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    createUser = new CreateUserService(fakeUsersRepository);
  });

  it('should be able to create a new user', async () => {
    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
      cellphone: '+5599999999999',
      wallet: 0.0,
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
      wallet: 0.0,
    });

    await expect(
      createUser.execute({
        name: 'Jenny Doe',
        email: 'johndoe@example.com',
        password: '123456',
        cellphone: '+5588888888888',
        wallet: 0.0,
      }),
    ).rejects.toBeInstanceOf(Error);
  });

  it('should not be able to create a new user with an used cellphone', async () => {
    await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
      cellphone: '+5599999999999',
      wallet: 0.0,
    });

    await expect(
      createUser.execute({
        name: 'Jenny Doe',
        email: 'jonnydoe@example.com',
        password: '123456',
        cellphone: '+5599999999999',
        wallet: 0.0,
      }),
    ).rejects.toBeInstanceOf(Error);
  });
});
