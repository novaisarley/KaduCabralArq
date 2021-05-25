import { ensureAuthentication } from '@shared/infra/http/middlewares/EnsureAuthentication';
import { ensureIsEmployee } from '@shared/infra/http/middlewares/EnsureIsEmployee';
import { Router } from 'express';

import { UsersController } from '../controllers/UsersController';

const userRouter = Router();

const usersController = new UsersController();

userRouter.post('/', usersController.create);

userRouter.get(
  '/:code',
  ensureAuthentication,
  ensureIsEmployee,
  usersController.show,
);

export { userRouter };
