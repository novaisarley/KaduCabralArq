import { container } from 'tsyringe';
import { Request, Response } from 'express';

import { AddValueToWalletService } from '@modules/user/services/AddValueToWalletService';

export class UsersWalletController {
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
