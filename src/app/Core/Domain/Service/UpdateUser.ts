import { validate } from 'class-validator';
import { userRepository } from '../Repository/UserRepository';
import { AppError } from '@util/appError.util';
import { UpdateUserDto } from '../Dto/UpdateUserDto';

export class UpdateUser {
    public async execute(updateUserDto: UpdateUserDto): Promise<void> {
        const user = await userRepository.findOneBy({
            id: updateUserDto.id,
        });

        if (user == null) {
            throw new AppError('Usuário não encontrado');
        }

        user.name = updateUserDto.name;

        const errors = await validate(user);
        if (errors.length > 0) {
            throw new AppError('Ocorreu um erro. Tente Novamente');
        } else {
            await userRepository.save(user);
        }
    }
}
