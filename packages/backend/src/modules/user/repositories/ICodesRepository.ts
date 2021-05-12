import { Code } from '../infra/typeorm/entities/Code';

export interface ICodesRepository {
  generateCode: (payload: string, user_id: string) => Promise<Code>;
}
