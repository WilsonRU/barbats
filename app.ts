/* eslint-disable @typescript-eslint/restrict-template-expressions */
import * as dotenv from 'dotenv';
import 'express-async-errors';
import cors from 'cors';
import express from 'express';
import { routes } from './src/Routes';
import { ErrorHandler } from './src/middlewares/ErrorHandler';
import { AppDataSource } from './src/data-source';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);
app.use(ErrorHandler);

void AppDataSource.initialize().then(() => {
    app.listen(process.env.APP_PORT, () => {
        console.log(`Server is running in port ${process.env.APP_PORT} 🚀`);
    });
});
