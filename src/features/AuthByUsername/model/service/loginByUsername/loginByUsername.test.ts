import { userActions } from '@/entities/User';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername, Message } from './loginByUsername';

jest.mock('axios');

// const mockedAxios = jest.mocked(axios, true); // эта хрень нужна, чтобы ниже выскаивали подсказки

describe('loginByUsername', () => {
    describe('loginByUsernameWithTestAsyncThunk', () => {
        test('success login', async () => {
            const userValue = { username: 'root', id: '1', avatar: 'avatar' };
            // mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
            const thunk = new TestAsyncThunk(loginByUsername);
            thunk.api.post.mockReturnValue(
                Promise.resolve({ data: userValue }),
            );
            const result = await thunk.callThunk({
                username: 'root',
                password: 'admin',
            });

            expect(thunk.dispatch).toHaveBeenCalledWith(
                userActions.setAuthData(userValue),
            );
            expect(thunk.dispatch).toHaveBeenCalledTimes(3);
            expect(thunk.api.post).toHaveBeenCalled();
            expect(result.meta.requestStatus).toBe('fulfilled');
            expect(result.payload).toEqual(userValue);
        });

        test('error login', async () => {
            // const userValue = { username: 'root', id: 1 };
            // mockedAxios.post.mockReturnValue(Promise.resolve({ statud: 403 }));
            const thunk = new TestAsyncThunk(loginByUsername);
            thunk.api.post.mockReturnValue(Promise.resolve({ statud: 403 }));
            const result = await thunk.callThunk({
                username: 'root',
                password: 'admin',
            });
            // console.log(result);
            expect(thunk.dispatch).toHaveBeenCalledTimes(2);
            expect(thunk.api.post).toHaveBeenCalled();
            expect(result.meta.requestStatus).toBe('rejected');
            expect(result.payload).toBe(Message.ERROR_USERNAME);
        });
    });

    // describe('loginByUsername', () => {
    //     let dispatch: Dispatch;
    //     let getState: () => StateSchema;
    //
    //     beforeEach(() => {
    //         dispatch = jest.fn();
    //         getState = jest.fn();
    //     });
    //
    //     test('success login', async () => {
    //         const userValue = { username: 'root', id: 1 };
    //         mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
    //         const action = loginByUsername({ username: 'root', password: 'admin' });
    //         const result = await action(dispatch, getState, undefined);
    //
    //         expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    //         expect(dispatch).toHaveBeenCalledTimes(3);
    //         expect(mockedAxios.post).toHaveBeenCalled();
    //         expect(result.meta.requestStatus).toBe('fulfilled');
    //         expect(result.payload).toEqual(userValue);
    //     });
    //
    //     test('error login', async () => {
    //         const userValue = { username: 'root', id: 1 };
    //         mockedAxios.post.mockReturnValue(Promise.resolve({ statud: 403 }));
    //         const action = loginByUsername({ username: 'root', password: 'admin' });
    //         const result = await action(dispatch, getState, undefined);
    //         // console.log(result);
    //         expect(dispatch).toHaveBeenCalledTimes(2);
    //         expect(mockedAxios.post).toHaveBeenCalled();
    //         expect(result.meta.requestStatus).toBe('rejected');
    //         expect(result.payload).toBe(Message.ERROR_USERNAME);
    //     });
    // });
});
