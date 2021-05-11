import { Router } from 'express';

import { employeeRouter } from 'modules/employee/infra/http/routes/employee.routes';

const routes = Router();

routes.use('/employee', employeeRouter);

export { routes };
