import { AppDataSource } from '../../../data-source';
import { User } from '../Entity/User';

export const userRepository = AppDataSource.getRepository(User);
