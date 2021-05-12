import { Router } from 'express';

import { UsersController } from '../controllers/UsersController';

const userRouter = Router();

const usersController = new UsersController();

userRouter.get('/:code', usersController.show);

userRouter.post('/', usersController.create);

export { userRouter };
