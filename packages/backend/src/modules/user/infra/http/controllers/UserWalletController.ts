import { container } from 'tsyringe';
import { Request, Response } from 'express';

import { AddValueToWalletService } from '@modules/user/services/AddValueToWalletService';
import { ShowUserWalletService } from '@modules/user/services/ShowUserWallet';

export class UsersWalletController {
  public async show(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const showUserWallet = container.resolve(ShowUserWalletService);

    const user_wallet = await showUserWallet.execute(user_id);

    return response.json({
      user_id,
      wallet: user_wallet,
    });
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { value } = request.body;

    const addValueToWallet = container.resolve(AddValueToWalletService);

    const user = await addValueToWallet.execute({
      user_id: id,
      value,
    });

    return response.json(user);
  }
}
