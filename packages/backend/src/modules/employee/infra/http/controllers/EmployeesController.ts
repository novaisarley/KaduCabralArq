import { container } from 'tsyringe';
import { Request, Response } from 'express';

import { CreateEmployeeService } from '@modules/employee/services/CreateEmployeeService';

export class EmployeesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password, isAdmin } = request.body;

    const createEmployee = container.resolve(CreateEmployeeService);

    const employee = await createEmployee.execute({
      name,
      email,
      password,
      isAdmin,
    });

    return response.json(employee);
  }
}
