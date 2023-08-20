import { Request, Response } from 'express';
import { GetUser } from '../../Domain/Service/GetUser';
import { RestInterface } from '@interfaces/RestInterface';

export class LoginAction implements RestInterface {
    public async respond(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;

        const getUser = new GetUser();
        const result = await getUser.execute(email, password);

        return res.status(200).json(result);
    }
}
