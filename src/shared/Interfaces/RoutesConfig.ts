import { RequestHandler } from 'express';

type Methods = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface RouteConfig {
    method: Methods;
    path: string;
    handlers: RequestHandler[];
}
