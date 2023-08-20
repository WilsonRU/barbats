import { Request, Response } from 'express';
import { RestInterface } from '@interfaces/RestInterface';
import { StatusCode } from '@http/StatusCode';

import { GetUser } from '../../Domain/Service/GetUser';
export class LoginAction implements RestInterface {
    public async respond(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;

        const getUser = new GetUser();
        const result = await getUser.execute(email, password);

        return res.status(StatusCode.OK).json(result);
    }
}
