import { Request, Response } from 'express';
import { CreateUser } from '../../Domain/Service/CreateUser';

export class SignupAction {
    private readonly createUser: CreateUser;

    constructor() {
        this.createUser = new CreateUser();
    }

    public async __invoke(req: Request, res: Response): Promise<Response> {
        const { email, password, name } = req.body;

        await this.createUser.execute(email, password, name);

        return res.status(201).json({
            status_code: 201,
            message: 'Usuario Cadastrado com sucesso.',
        });
    }
}
