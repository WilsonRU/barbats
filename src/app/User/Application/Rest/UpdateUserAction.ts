import { NextFunction, Request, Response } from 'express';
import { Header } from '@util/header.util';
import { RestInterface } from '@interfaces/RestInterface';
import { StatusCode } from '@http/StatusCode';

import { UpdateUser } from '@app/User/Domain/Service/UpdateUser';
import { UpdateUserDto } from '@app/User/Domain/Dto/UpdateUserDto';

export class UpdateUserAction implements RestInterface {
    public async respond(
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response> {
        try {
            const id = Header.get(req);

            req.body.id = id;
            const updateUserDto = UpdateUserDto.fromArray(req.body);

            const updateUser = new UpdateUser();
            await updateUser.execute(updateUserDto);
        } catch (error) {
            next(error);
        }

        return res.status(StatusCode.ACCEPTED).json({
            status_code: StatusCode.ACCEPTED,
            message: 'Atualizado com sucesso',
        });
    }
}
