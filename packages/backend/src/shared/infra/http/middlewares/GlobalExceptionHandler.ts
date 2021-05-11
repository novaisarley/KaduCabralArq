import { NextFunction, Request, Response } from 'express';

import { AppError } from '@shared/errors/AppError';

export function exceptionHandler(
  err: Error,
  _request: Request,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
): Response {
  // Handled Errors
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  // Unhandled Errors
  // eslint-disable-next-line no-console
  console.error(err, 'error');

  return response.status(500).json({
    stauts: 'error',
    message: 'Internal Server Error',
  });
}
