import { Slugfy } from './slugfy.util';

describe('Slugfy', () => {
    test('the text should return to slug', () => {
        expect(Slugfy.format('Test with slug')).toBe('test-with-slug');
    });
});
