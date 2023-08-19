import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { Rules } from '../Enum/Rules';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar' })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @Column({ type: 'varchar' })
    @IsString()
    @IsNotEmpty()
    password: string;

    @Column({ type: 'varchar' })
    @IsString()
    @IsNotEmpty()
    name: string;

    @Column({ type: 'enum', enum: Rules, default: Rules.USER })
    rule: Rules;

    @CreateDateColumn()
    createdAt?: Date;

    @UpdateDateColumn()
    updatedAt?: Date;

    @DeleteDateColumn()
    deletedAt?: Date;
}
