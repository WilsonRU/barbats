import { NextFunction, Request, Response } from 'express';
import { RestInterface } from '@interfaces/RestInterface';
import { StatusCode } from '@http/StatusCode';

import { GetUserDto } from 'app/Core/Domain/Dto/GetUserDto';
import { GetUser } from 'app/Core/Domain/Service/GetUser';

export class LoginAction implements RestInterface {
    private result: object;

    public async respond(
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response> {
        try {
            const userDto = GetUserDto.fromArray(req.body);

            const getUser = new GetUser();
            this.result = await getUser.execute(userDto);
        } catch (error) {
            next(error);
        }

        return res.status(StatusCode.OK).json(this.result);
    }
}
