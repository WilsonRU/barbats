import { Request, Response } from 'express';
import { Header } from '../../../shared/Util/header.util';
import { UpdateUser } from '../../Domain/Service/UpdateUser';

export class UpdateUserAction {
    public async __invoke(req: Request, res: Response): Promise<Response> {
        const id = Header.get(req);

        const { name } = req.body;

        const updateUser = new UpdateUser();
        await updateUser.execute(id, name);

        return res.status(202).json({
            status_code: 202,
            message: 'Atualizado com sucesso',
        });
    }
}
