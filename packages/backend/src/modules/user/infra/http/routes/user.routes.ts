import { ensureAuthentication } from '@shared/infra/http/middlewares/EnsureAuthentication';
import { ensureIsEmployee } from '@shared/infra/http/middlewares/EnsureIsEmployee';
import { Router } from 'express';

import { UsersController } from '../controllers/UsersController';
import { UsersWalletController } from '../controllers/UserWalletController';

const userRouter = Router();

const usersController = new UsersController();
const usersWalletController = new UsersWalletController();

userRouter.post('/', usersController.create);

userRouter.get(
  '/:code',
  ensureAuthentication,
  ensureIsEmployee,
  usersController.show,
);

userRouter.patch(
  '/wallet/:id',
  ensureAuthentication,
  ensureIsEmployee,
  usersWalletController.update,
);

export { userRouter };
