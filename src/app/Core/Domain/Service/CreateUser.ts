import bcrypt from 'bcrypt';
import { AppError } from '@util/appError.util';
import { CreateUserDto } from '../Dto/CreateUserDto';
import { userRepository } from '../Repository/UserRepository';
import { User } from '../Entity/User';

export class CreateUser {
    public async execute(createUserDto: CreateUserDto): Promise<User> {
        const userAlreadyExists = await userRepository.findOneBy({
            email: createUserDto.getEmail(),
        });
        if (userAlreadyExists != null) {
            throw new AppError('Já existe usuário com esse email!');
        }

        const passwordHash: string = bcrypt.hashSync(
            createUserDto.getPassword(),
            bcrypt.genSaltSync(10),
        );

        const user = userRepository.create({
            email: createUserDto.getEmail(),
            password: passwordHash,
            name: createUserDto.getPassword(),
        });

        await userRepository.save(user);

        return user;
    }
}
