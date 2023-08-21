import { Request, Response } from 'express';
import { Header } from '@util/header.util';
import { RestInterface } from '@interfaces/RestInterface';
import { StatusCode } from '@http/StatusCode';

import { UpdateUser } from '../../Domain/Service/UpdateUser';
import { UpdateUserDto } from 'app/Core/Domain/Dto/UpdateUserDto';

export class UpdateUserAction implements RestInterface {
    public async respond(req: Request, res: Response): Promise<Response> {
        const id = Header.get(req);

        const updateUserDto: UpdateUserDto = {
            id,
            name: req.body.name,
        };

        const updateUser = new UpdateUser();
        await updateUser.execute(updateUserDto);

        return res.status(StatusCode.ACCEPTED).json({
            status_code: StatusCode.ACCEPTED,
            message: 'Atualizado com sucesso',
        });
    }
}
