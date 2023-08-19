import { Router } from 'express';
import { Authentication } from '@middlewares/Authentication';

import { LoginAction } from './app/Core/Application/Rest/LoginAction';
import { SignupAction } from './app/Core/Application/Rest/SignupAction';
import { UpdateUserAction } from './app/Core/Application/Rest/UpdateUserAction';

const loginAction = new LoginAction();
const signupAction = new SignupAction();
const updateAction = new UpdateUserAction();

const coreRoutes = Router();

coreRoutes.post('/login', loginAction.__invoke);
coreRoutes.post('/signup', signupAction.__invoke);
coreRoutes.put('/', Authentication, updateAction.__invoke);

const routes = Router();

routes.use('/core', coreRoutes);

export { routes };
