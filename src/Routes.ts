import { Router } from 'express';
import { Authentication } from '@middlewares/Authentication';
import { RouteConfig } from '@interfaces/RoutesConfig';
import { RouterFactory } from '@http/RouterFactory';

import { LoginAction } from '@app/Core/Application/Rest/LoginAction';
import { SignupAction } from '@app/Core/Application/Rest/SignupAction';
import { UpdateUserAction } from '@app/Core/Application/Rest/UpdateUserAction';

const routes = Router();

const coreRouteConfigs: RouteConfig[] = [
    { method: 'POST', path: '/login', handlers: [new LoginAction().respond] },
    { method: 'POST', path: '/signup', handlers: [new SignupAction().respond] },
    {
        method: 'PUT',
        path: '/',
        handlers: [Authentication, new UpdateUserAction().respond],
    },
];
const coreRoutes = RouterFactory.createRouter(coreRouteConfigs);

routes.use('/core', coreRoutes);

export { routes };
