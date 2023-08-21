import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { userRepository } from '../Repository/UserRepository';
import { AppError } from '@util/appError.util';
import { GetUserDto } from '../Dto/GetUserDto';

export class GetUser {
    public async execute(userDto: GetUserDto): Promise<any> {
        const user = await userRepository.findOneBy({
            email: userDto.email,
        });

        if (user == null) {
            throw new AppError('Usuário não encontrado.');
        }

        const result = bcrypt.compareSync(userDto.password, user.password);
        if (!result) {
            throw new AppError('Senha invalida, Tente Novamente!');
        }
        const token = jwt.sign(
            { _id: user.id },
            process.env.JWT_SECRET != null ? process.env.JWT_SECRET : '',
            {
                expiresIn: '1 days',
            },
        );

        return {
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            },
        };
    }
}
