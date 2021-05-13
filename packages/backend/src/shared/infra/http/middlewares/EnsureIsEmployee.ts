import { AppError } from '@shared/errors/AppError';
import { NextFunction, Request, Response } from 'express';

export function ensureIsEmployee(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const { type } = request.user;

  if (type === 'user')
    throw new AppError('The user is not authorized to make the request', 401);

  return next();
}
