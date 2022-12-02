import { getQueryParams } from './addQueryParams';

describe('test query params', () => {
    test('with 1 params', () => {
        const params = getQueryParams({
            test: 'value',
        });
        expect(params).toEqual('?test=value');
    });
    test('with many params', () => {
        const params = getQueryParams({
            test: 'value',
            secondTest: 'secondValue',
        });
        expect(params).toEqual('?test=value&secondTest=secondValue');
    });
    test('with undefined params', () => {
        const params = getQueryParams({
            test: 'value',
            secondTest: undefined,
        });
        expect(params).toEqual('?test=value');
    });
    test('with 0 params', () => {
        const params = getQueryParams({
        });
        expect(params).toEqual('?');
    });
});
