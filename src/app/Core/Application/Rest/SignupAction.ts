import { NextFunction, Request, Response } from 'express';
import { RestInterface } from '@interfaces/RestInterface';
import { StatusCode } from '@http/StatusCode';
import { CreateUserDto } from 'app/Core/Domain/Dto/CreateUserDto';
import { CreateUser } from 'app/Core/Domain/Service/CreateUser';

export class SignupAction implements RestInterface {
    public async respond(
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response> {
        try {
            const createUserDto = CreateUserDto.fromArray(req.body);

            const createUser = new CreateUser();
            await createUser.execute(createUserDto);
        } catch (error) {
            next(error);
        }

        return res.status(StatusCode.CREATED).json({
            status_code: StatusCode.CREATED,
            message: 'Usuario Cadastrado com sucesso.',
        });
    }
}
