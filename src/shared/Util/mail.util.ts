import nodemailer from 'nodemailer';
import { ComposeEmailInterface } from '@interfaces/ComposeEmailInterface';
import { AppError } from '@util/appError.util';

export class Mail {
    private readonly options: any;

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

    public async send(config: ComposeEmailInterface): Promise<void> {
        const transport = nodemailer.createTransport(this.options);

        try {
            await transport.sendMail({
                from: process.env.MAIL_FROM,
                to: config.to,
                subject: config.subject,
                html: config.message,
            });
        } catch (error) {
            throw new AppError(`${error}`);
        }
    }
}
