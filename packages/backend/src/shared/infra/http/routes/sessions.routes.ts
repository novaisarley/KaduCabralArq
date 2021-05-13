import { Router } from 'express';

import { EmployeeSessionsController } from '@modules/employee/infra/http/controllers/EmployeeSessionsController';
import { UserSessionsController } from '@modules/user/infra/http/controllers/UserSessionsController';

const sessionsRouter = Router();

const userSessionsController = new UserSessionsController();
const employeeSessionsController = new EmployeeSessionsController();

sessionsRouter.post('/user', userSessionsController.create);
sessionsRouter.post('/employee', employeeSessionsController.create);

export { sessionsRouter };
