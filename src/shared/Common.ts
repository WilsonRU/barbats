/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Secret } from 'jsonwebtoken';

const SECRET_KEY: Secret = process.env.JWT_SECRET ? process.env.JWT_SECRET : '';

export { SECRET_KEY };
