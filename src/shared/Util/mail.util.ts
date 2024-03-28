import nodemailer from 'nodemailer';
import { ComposeEmailInterface } from '@interfaces/ComposeEmailInterface';
import { AppError } from '@util/appError.util';
import { StatusCode } from '@http/StatusCode';

export class Mail {
    private readonly options: object;

    constructor() {
        this.options = {
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            secure: false,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        };
    }

    public async send(compose: ComposeEmailInterface): Promise<void> {
        const transport = nodemailer.createTransport(this.options);

        try {
            await transport.sendMail({
                from: process.env.MAIL_FROM,
                to: compose.to,
                subject: compose.subject,
                html: compose.message,
            });
        } catch (error) {
            throw new AppError(`Mail: ${error}`, StatusCode.GATEWAY_TIMEOUT);
        }
    }
}
