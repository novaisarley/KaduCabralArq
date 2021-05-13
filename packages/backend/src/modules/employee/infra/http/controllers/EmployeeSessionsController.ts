import { AuthenticateEmployeeService } from '@modules/employee/services/AuthenticateEmployeeService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class EmployeeSessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUser = container.resolve(AuthenticateEmployeeService);

    const { employee, token } = await authenticateUser.execute({
      email,
      password,
    });

    // @ts-expect-error Security Reason
    delete employee.password;

    return response.json({ employee, token });
  }
}
