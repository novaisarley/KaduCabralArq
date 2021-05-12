import { container } from 'tsyringe';
import { Request, Response } from 'express';

import { CreateUserService } from '@modules/user/services/CreateUserService';
import { ShowUserService } from '@modules/user/services/ShowUserService';

export class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password, cellphone } = request.body;

    const createEmployee = container.resolve(CreateUserService);

    const employee = await createEmployee.execute({
      name,
      email,
      password,
      cellphone,
    });

    return response.json(employee);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { code } = request.params;

    const showUser = container.resolve(ShowUserService);

    const user = await showUser.execute(code);

    return response.json(user);
  }
}
