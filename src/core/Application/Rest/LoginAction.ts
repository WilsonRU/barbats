import { Request, Response } from 'express';
import { GetUser } from '../../Domain/Service/GetUser';

export class LoginAction {
    private readonly getUser: GetUser;

    constructor() {
        this.getUser = new GetUser();
    }

    public async __invoke(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;

        const result = await this.getUser.execute(email, password);

        return res.status(200).json(result);
    }
}
