import bcrypt from 'bcrypt';
import { validate } from 'class-validator';
import { User } from '../Entity/User';
import { userRepository } from '../Repository/UserRepository';
import { AppError } from 'shared/Util/appError.util';

export class CreateUser {
    public async execute(
        email: string,
        password: string,
        name: string,
    ): Promise<User> {
        const userAlreadyExists = await userRepository.findOneBy({
            email,
        });
        if (userAlreadyExists != null) {
            throw new AppError('Já existe usuário com esse email!');
        }

        const passwordHash: string = bcrypt.hashSync(
            password,
            bcrypt.genSaltSync(10),
        );

        const user = userRepository.create({
            email,
            password: passwordHash,
            name,
        });

        const errors = await validate(user);
        if (errors.length > 0) {
            throw new AppError('Ocorreu um erro. Tente Novamente');
        } else {
            await userRepository.save(user);
        }
        return user;
    }
}
