import { compare, hash } from 'bcrypt';
import { IHashProvider } from '../models/IHashProvider';

export class BCryptHashProvider implements IHashProvider {
  public async generateHash(payload: string): Promise<string> {
    const hashedPassword = await hash(payload, 8);

    return hashedPassword;
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    const response = await compare(payload, hashed);

    return response;
  }
}
