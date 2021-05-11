import { Router } from 'express';

import { EmployeesController } from '../controllers/EmployeesController';

const employeeRouter = Router();

const employeesController = new EmployeesController();

employeeRouter.post('/', employeesController.create);

export { employeeRouter };
