import { NextFunction, Request, Response } from 'express';

export interface RestInterface {
    respond: (
        req: Request,
        res: Response,
        next: NextFunction,
    ) => Promise<Response>;
}
