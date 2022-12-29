import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Profile } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import userEvent from '@testing-library/user-event';
import { fireEvent, screen } from '@testing-library/react';
import { profilerReducer } from '../model/slices/profileSlices';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
    id: 1,
    first: 'admin',
    lastname: 'admin',
    age: 234,
    currency: Currency.EURO,
    country: Country.Belarus,
    city: 'Minsk',
    username: 'admin123',
};

describe('EditableProfileCard test', () => {
    test('mode read only should be toggled ', () => {
        componentRender(<EditableProfileCard id="1" />, {
            initialState: {
                profile: {
                    readonly: true,
                    data: profile,
                    form: profile,
                },
            },
            asyncReducers: {
                profile: profilerReducer,
            },
        });
        userEvent.click(screen.getByTestId('EditProfileCardPageHeader.EditButton'));
        expect(screen.getByTestId('EditProfileCardPageHeader.CancelButton')).toBeInTheDocument();
    });
});
