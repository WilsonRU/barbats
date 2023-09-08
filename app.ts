import * as dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import { routes } from 'Routes';
import { ErrorHandler } from '@middlewares/ErrorHandler';
import { AppDataSource } from 'data-source';

export class App {
    public server: express.Application;

    constructor() {
        this.server = express();
        this.middleware();
        this.router();
        dotenv.config();
    }

    private middleware() {
        this.server.use(express.json());
        this.server.use(cors());
    }

    private router() {
        this.server.use(routes);
        this.server.use(ErrorHandler);
    }
}

void AppDataSource.initialize().then(() => {
    new App().server.listen(process.env.APP_PORT, () => {
        console.log(`Server is running in port ${process.env.APP_PORT} 🚀`);
    });
});
