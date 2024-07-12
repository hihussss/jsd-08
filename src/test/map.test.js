import { ErrorRepository } from "../class/map";


test('translate', () => {
    const error = new ErrorRepository();
    error.errors.set(404, 'Not found');
    error.errors.set(500, 'Server error');
    expect(error.translate(404)).toBe('Not found');
})

test('translateError', () => {
    const error = new ErrorRepository();
    error.errors.set(404, 'Not found');
    error.errors.set(500, 'Server error');
    expect(() => error.translate(405)).toThrow();
})