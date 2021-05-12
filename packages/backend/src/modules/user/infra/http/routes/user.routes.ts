import { Router } from 'express';

import { UsersController } from '../controllers/UsersController';
import { UsersWalletController } from '../controllers/UserWalletController';

const userRouter = Router();

const usersController = new UsersController();
const usersWalletController = new UsersWalletController();

userRouter.get('/:code', usersController.show);

userRouter.post('/', usersController.create);

userRouter.patch('/:id', usersWalletController.update);

export { userRouter };
