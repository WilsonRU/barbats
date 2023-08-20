import { StatusCode } from '@http/StatusCode';
export class AppError {
    public readonly message: string;

    public readonly statusCode: number;

    constructor(
        message: string,
        statusCode = StatusCode.INTERNAL_SERVER_ERRRO,
    ) {
        this.message = message;
        this.statusCode = statusCode;
    }
}
