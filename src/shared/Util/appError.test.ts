import { StatusCode } from '@http/StatusCode';
import { AppError } from './appError.util';

describe('appError', () => {
    test('when creating and the expected data is returned', () => {
        const appErrorMock = new AppError('test');

        expect(appErrorMock.message).toBe('test');
        expect(appErrorMock.statusCode).toBe(StatusCode.INTERNAL_SERVER_ERRRO);
    });

    test('when creating and passing a status other than the default, the expected data is returned', () => {
        const appErrorMock = new AppError('test', StatusCode.NOT_FOUND);

        expect(appErrorMock.message).toBe('test');
        expect(appErrorMock.statusCode).toBe(StatusCode.NOT_FOUND);
    });
});
