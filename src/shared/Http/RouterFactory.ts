import { AppError } from '@util/appError.util';
import { RouteConfig } from '@interfaces/RoutesConfig';
import { Router } from 'express';

export class RouterFactory {
    static createRouter(routeConfigs: RouteConfig[]): Router {
        const router = Router();

        routeConfigs.forEach(config => {
            switch (config.method) {
                case 'GET':
                    router.get(config.path, ...config.handlers);
                    break;
                case 'POST':
                    router.post(config.path, ...config.handlers);
                    break;
                case 'PUT':
                    router.put(config.path, ...config.handlers);
                    break;
                case 'PATCH':
                    router.patch(config.path, ...config.handlers);
                    break;
                case 'DELETE':
                    router.delete(config.path, ...config.handlers);
                    break;
                default:
                    throw new AppError(
                        `Unsupported HTTP method: ${config.method}`,
                    );
            }
        });
        return router;
    }
}
