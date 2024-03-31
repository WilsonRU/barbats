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

        await userRepository.save(user);
    }
}
