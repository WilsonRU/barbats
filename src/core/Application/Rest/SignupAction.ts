import { Request, Response } from 'express';
import { CreateUser } from '../../Domain/Service/CreateUser';

export class SignupAction {
    public async __invoke(req: Request, res: Response): Promise<Response> {
        const { email, password, name } = req.body;

        const createUser = new CreateUser();
        await createUser.execute(email, password, name);

        return res.status(201).json({
            status_code: 201,
            message: 'Usuario Cadastrado com sucesso.',
        });
    }
}
