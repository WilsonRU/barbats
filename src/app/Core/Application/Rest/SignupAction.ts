import { Request, Response } from 'express';
import { RestInterface } from '@interfaces/RestInterface';
import { StatusCode } from '@http/StatusCode';
import { CreateUser } from '../../Domain/Service/CreateUser';

export class SignupAction implements RestInterface {
    public async respond(req: Request, res: Response): Promise<Response> {
        const { email, password, name } = req.body;

        const createUser = new CreateUser();
        await createUser.execute(email, password, name);

        return res.status(StatusCode.CREATED).json({
            status_code: StatusCode.CREATED,
            message: 'Usuario Cadastrado com sucesso.',
        });
    }
}
