import { Router } from 'express';
import { ensureAuthentication } from '@shared/infra/http/middlewares/EnsureAuthentication';
import { ensureIsEmployee } from '@shared/infra/http/middlewares/EnsureIsEmployee';

import { UsersWalletController } from '../controllers/UserWalletController';

const walletRouter = Router();

const usersWalletController = new UsersWalletController();

walletRouter.get('/', ensureAuthentication, usersWalletController.show);

walletRouter.patch(
  '/:id',
  ensureAuthentication,
  ensureIsEmployee,
  usersWalletController.update,
);

export { walletRouter };
