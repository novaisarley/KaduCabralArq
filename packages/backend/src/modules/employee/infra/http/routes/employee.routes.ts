import { Router } from 'express';
import { CreateEmployeeService } from 'modules/employee/services/CreateEmployeeService';
import { EmployeesRepository } from '../../typeorm/repositories/EmployeesRepository';

const employeeRouter = Router();

employeeRouter.post('/', async (request, response) => {
  const { name, email, password, isAdmin } = request.body;

  const employeesRepository = new EmployeesRepository();
  const createEmployee = new CreateEmployeeService(employeesRepository);

  const employee = await createEmployee.execute({
    name,
    email,
    password,
    isAdmin,
  });

  return response.json(employee);
});

export { employeeRouter };
