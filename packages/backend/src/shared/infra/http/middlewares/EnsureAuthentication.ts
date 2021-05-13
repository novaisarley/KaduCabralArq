import { AppError } from '@shared/errors/AppError';
import { verify, Secret, TokenExpiredError } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

import authConfig from '@config/auth';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
  type: string;
}

export function ensureAuthentication(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader)
    throw new AppError(
      'The user must be logged in to make this API request. Check the value of the Authorization HTTP request header',
      401,
    );

  const [, token] = authHeader.split(' ');

  try {
    const decoded = verify(token, authConfig.jwt.secret as Secret);

    const { sub, type } = decoded as ITokenPayload;

    request.user = {
      id: sub,
      type,
    };

    return next();
  } catch (err) {
    if (typeof err === typeof TokenExpiredError)
      throw new AppError(
        'Session Expired. Check the value of the Authorization HTTP request header',
        401,
      );
    throw new AppError(
      'The authorization credentials provided for the request are invalid. Check the value of the Authorization HTTP request header',
      401,
    );
  }
}
