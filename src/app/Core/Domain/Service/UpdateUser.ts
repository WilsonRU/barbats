import { validate } from 'class-validator';
import { userRepository } from '../Repository/UserRepository';
import { AppError } from 'shared/Util/appError.util';

export class UpdateUser {
    public async execute(id: number, name: string): Promise<void> {
        const user = await userRepository.findOneBy({
            id,
        });

        if (user == null) {
            throw new AppError('Usuário não encontrado');
        }

        user.name = name;

        const errors = await validate(user);
        if (errors.length > 0) {
            throw new AppError('Ocorreu um erro. Tente Novamente');
        } else {
            await userRepository.save(user);
        }
    }
}
