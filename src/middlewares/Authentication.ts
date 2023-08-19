/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-throw-literal */
import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { AppError } from '../shared/Util/appError.util';
import { SECRET_KEY } from '../shared/Common';
export interface CustomRequest extends Request {
    token: JwtPayload | string;
}

export const Authentication = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (token == null) {
            throw new AppError('Token não encontrado', 401);
        }

        const decoded = jwt.verify(token, SECRET_KEY);
        (req as CustomRequest).token = decoded;

        next();
    } catch (error) {
        throw new AppError('Token expirado ou inválido', 418);
    }
};
