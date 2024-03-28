import { Request, Response } from 'express';
import { RestInterface } from '@interfaces/RestInterface';
import { StatusCode } from '@http/StatusCode';

import { GetUserDto } from 'app/Core/Domain/Dto/GetUserDto';
import { GetUser } from 'app/Core/Domain/Service/GetUser';

export class LoginAction implements RestInterface {
    public async respond(req: Request, res: Response): Promise<Response> {
        const userDto = GetUserDto.fromArray(req.body);

        const getUser = new GetUser();
        const result = await getUser.execute(userDto);

        return res.status(StatusCode.OK).json(result);
    }
}
