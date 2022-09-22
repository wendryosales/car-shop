import { NextFunction, Request, Response } from 'express';
import GenericError from './generic.error';

class ErrorHandling {
  private _name!: string;

  public middleware(
    err: GenericError,
    _req: Request,
    res: Response,
    _next: NextFunction,
  ): Response {
    this._name = 'GenericError';
    
    if (err.name === this._name) {
      return res.status(err.code).json({
        message: err.message,
      });
    }
    return res.status(500).json({
      message: err.message,
    });
  }
}

export default ErrorHandling;
