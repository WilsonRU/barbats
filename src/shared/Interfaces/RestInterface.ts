import { Request, Response } from 'express';

export interface RestInterface {
    respond: (req: Request, res: Response) => Promise<Response>;
}
