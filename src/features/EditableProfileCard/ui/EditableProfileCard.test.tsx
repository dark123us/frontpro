import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import {
    componentRender,
    componentRenderOptions,
} from '@/shared/lib/tests/componentRender/componentRender';
import { Profile } from '@/entities/Profile';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { $api } from '@/shared/api/api';
import { profilerReducer } from '../model/slices/profileSlices';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 234,
    currency: Currency.EURO,
    country: Country.Belarus,
    city: 'Minsk',
    username: 'admin123',
};

const options: componentRenderOptions = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: { id: '1', username: 'admin123' },
        },
    },
    asyncReducers: {
        profile: profilerReducer,
    },
};

describe('EditableProfileCard test', () => {
    test('mode read only should be toggled ', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(
            screen.getByTestId('EditProfileCardPageHeader.EditButton'),
        );
        expect(
            screen.getByTestId('EditProfileCardPageHeader.CancelButton'),
        ).toBeInTheDocument();
    });

    test('edit fields should be cleared ', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(
            screen.getByTestId('EditProfileCardPageHeader.EditButton'),
        );

        await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));
        await userEvent.clear(screen.getByTestId('ProfileCard.LastName'));
        await userEvent.type(
            screen.getByTestId('ProfileCard.FirstName'),
            'user1',
        );
        await userEvent.type(
            screen.getByTestId('ProfileCard.LastName'),
            'user2',
        );

        expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue(
            'user1',
        );
        expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('user2');

        await userEvent.click(
            screen.getByTestId('EditProfileCardPageHeader.CancelButton'),
        );
        expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue(
            'admin',
        );
        expect(screen.getByTestId('ProfileCard.LastName')).toHaveValue('admin');
    });

    test('should be error ', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(
            screen.getByTestId('EditProfileCardPageHeader.EditButton'),
        );
        await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'));
        await userEvent.click(
            screen.getByTestId('EditProfileCardPageHeader.SaveButton'),
        );
        expect(
            screen.getByTestId('EditableProfileCard.Error.Paragraph'),
        ).toBeInTheDocument();
    });

    test('validate ok - send put ', async () => {
        const mockPutReq = jest.spyOn($api, 'put');

        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(
            screen.getByTestId('EditProfileCardPageHeader.EditButton'),
        );
        await userEvent.type(
            screen.getByTestId('ProfileCard.FirstName'),
            'user1',
        );
        await userEvent.click(
            screen.getByTestId('EditProfileCardPageHeader.SaveButton'),
        );
        expect(mockPutReq).toHaveBeenCalled();
    });
});
