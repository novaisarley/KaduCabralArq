import { FakeHashProvider } from '@shared/container/providers/HashProvider/fakes/FakeHashProvider';
import { AppError } from '@shared/errors/AppError';
import { FakeCodesRepository } from '../repositories/fakes/FakeCodesRepository';

import { FakeUsersRepository } from '../repositories/fakes/FakeUsersRepository';
import { AddValueToWalletService } from './AddValueToWalletService';
import { CreateUserService } from './CreateUserService';

let fakeUsersRepository: FakeUsersRepository;
let fakeCodesRepository: FakeCodesRepository;
let fakeHashProvider: FakeHashProvider;

let createUser: CreateUserService;
let addValueToWallet: AddValueToWalletService;

describe('UpdateWalletValue', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeCodesRepository = new FakeCodesRepository(fakeUsersRepository);
    fakeHashProvider = new FakeHashProvider();

    createUser = new CreateUserService(
      fakeUsersRepository,
      fakeCodesRepository,
      fakeHashProvider,
    );

    addValueToWallet = new AddValueToWalletService(fakeUsersRepository);
  });

  it('should be able to add more money to user wallet', async () => {
    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
      cellphone: '+5599999999999',
    });

    const previousWalletValue = user.wallet;

    const returnedUser = await addValueToWallet.execute({
      user_id: user.id,
      value: 10,
    });

    expect(returnedUser.wallet).toBe(previousWalletValue + 10);
  });

  it('should not be able to add more money to nonexistent user wallet', async () => {
    await expect(
      addValueToWallet.execute({
        user_id: 'nonexistent-user',
        value: 10,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
