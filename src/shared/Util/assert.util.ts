import { StatusCode } from '@http/StatusCode';
import { AppError } from './appError.util';

export class Assert {
    static isString(field: any, message: string): void {
        if (typeof field !== 'string') {
            throw new AppError(message, StatusCode.BAD_REQUEST);
        }
    }

    static isNumber(field: any, message: string): void {
        if (typeof field !== 'number') {
            throw new AppError(message, StatusCode.BAD_REQUEST);
        }
    }

    static isEmpty(field: any, message: string): void {
        if (field === undefined || field === null) {
            throw new AppError(message, StatusCode.BAD_REQUEST);
        }
    }

    static isBoolean(field: any, message: string): void {
        if (typeof field !== 'boolean') {
            throw new AppError(message, StatusCode.BAD_REQUEST);
        }
    }
}
