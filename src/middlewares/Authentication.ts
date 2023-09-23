import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { AppError } from '@util/appError.util';
import { StatusCode } from '@http/StatusCode';
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
            throw new AppError('Token não encontrado', StatusCode.UNAUTHORIZED);
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET != null ? process.env.JWT_SECRET : '',
        );
        (req as CustomRequest).token = decoded;
        next();
    } catch (error) {
        throw new AppError('Token expirado ou inválido', StatusCode.CONFLICT);
    }
};
