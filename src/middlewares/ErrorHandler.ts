import { NextFunction, Request, Response } from 'express';
import { AppError } from '@util/appError.util';
import { StatusCode } from '@http/StatusCode';

export const ErrorHandler = async (
    err: Error,
    request: Request,
    response: Response,
    next: NextFunction,
) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }

    return response.status(StatusCode.INTERNAL_SERVER_ERRRO).json({
        status: 'error',
        message: err.message,
    });
};
