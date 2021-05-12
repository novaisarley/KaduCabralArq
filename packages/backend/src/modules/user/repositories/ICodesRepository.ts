import { Code } from '../infra/typeorm/entities/Code';

export interface ICodesRepository {
  findByValue: (code: string) => Promise<Code | undefined>;

  generateCode: (payload: string, user_id: string) => Promise<Code>;
}
