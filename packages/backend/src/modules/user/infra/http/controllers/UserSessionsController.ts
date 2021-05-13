import AuthenticateUserService from '@modules/user/services/AuthenticateUserService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class UserSessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUser = container.resolve(AuthenticateUserService);

    const { user, token } = await authenticateUser.execute({ email, password });

    // @ts-expect-error Security Reason
    delete user.password;

    return response.json({ user, token });
  }
}
