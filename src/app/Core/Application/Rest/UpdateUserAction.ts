import { Request, Response } from 'express';
import { UpdateUser } from '../../Domain/Service/UpdateUser';
import { Header } from 'shared/Util/header.util';
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
