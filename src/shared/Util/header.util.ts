import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export class Header {
    static get(req: Request): any {
        return (req.token as JwtPayload)._id;
    }
}
