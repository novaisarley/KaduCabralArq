import { Router } from 'express';

// Routes
import { userRouter } from '@modules/user/infra/http/routes/user.routes';
import { employeeRouter } from '@modules/employee/infra/http/routes/employee.routes';

const routes = Router();

routes.use('/employee', employeeRouter);
routes.use('/user', userRouter);

export { routes };
