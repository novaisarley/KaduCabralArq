import { Router } from 'express';

// Routes
import { userRouter } from '@modules/user/infra/http/routes/user.routes';
import { employeeRouter } from '@modules/employee/infra/http/routes/employee.routes';
import { sessionsRouter } from './sessions.routes';

const routes = Router();

routes.use('/employee', employeeRouter);
routes.use('/user', userRouter);

routes.use('/session', sessionsRouter);

export { routes };
