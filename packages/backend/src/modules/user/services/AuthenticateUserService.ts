import { Secret, sign } from 'jsonwebtoken';

import authConfig from '@config/auth';
import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import { IHashProvider } from '@shared/container/providers/HashProvider/models/IHashProvider';
import { IUsersRepository } from '../repositories/IUsersRepository';
import { User } from '../infra/typeorm/entities/User';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

@injectable()
class AuthenticateUserService {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) throw new AppError('Invalid email or password', 401);

    const hasPasswordMatched = await this.hashProvider.compareHash(
      password,
      user.password,
    );

    if (!hasPasswordMatched)
      throw new AppError('Invalid email or password', 401);

    // User authenticated

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign(
      {
        type: 'user',
      },
      secret as Secret,
      {
        subject: user.id,
        expiresIn,
      },
    );

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
