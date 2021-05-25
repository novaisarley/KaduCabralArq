import { FakeHashProvider } from '@shared/container/providers/HashProvider/fakes/FakeHashProvider';
import { AppError } from '@shared/errors/AppError';
import { FakeCodesRepository } from '../repositories/fakes/FakeCodesRepository';

import { FakeUsersRepository } from '../repositories/fakes/FakeUsersRepository';
import { CreateUserService } from './CreateUserService';
import { ShowUserWalletService } from './ShowUserWallet';

let fakeUsersRepository: FakeUsersRepository;
let fakeCodesRepository: FakeCodesRepository;
let fakeHashProvider: FakeHashProvider;

let createUser: CreateUserService;
let showUserWallet: ShowUserWalletService;

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

    showUserWallet = new ShowUserWalletService(fakeUsersRepository);
  });

  it('should be able to show user wallet by ID', async () => {
    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
      cellphone: '+5599999999999',
    });

    const userWallet = await showUserWallet.execute(user.id);

    expect(userWallet).toBe(0);
  });

  it('should not be able to show user wallet by nonexistent ID', async () => {
    await expect(
      showUserWallet.execute('nonexistent-id'),
    ).rejects.toBeInstanceOf(AppError);
  });
});
