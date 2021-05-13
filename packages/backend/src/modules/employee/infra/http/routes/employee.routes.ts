import { ensureAuthentication } from '@shared/infra/http/middlewares/EnsureAuthentication';
import { ensureIsAdmin } from '@shared/infra/http/middlewares/EnsureIsAdmin';
import { Router } from 'express';

import { EmployeesController } from '../controllers/EmployeesController';

const employeeRouter = Router();

const employeesController = new EmployeesController();

employeeRouter.use(ensureAuthentication);
employeeRouter.use(ensureIsAdmin);

employeeRouter.post('/', employeesController.create);

export { employeeRouter };
