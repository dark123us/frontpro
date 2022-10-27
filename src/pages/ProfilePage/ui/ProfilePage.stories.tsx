import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import {
    ThemeDecorator,
} from 'shared/config/Storybook/Decorators/ThemeDecorator';
import { StoreDecorator } from 'shared/config/Storybook/Decorators/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import AvatarImage from 'shared/assets/test/avatar.jpg';
import ProfilePage from './ProfilePage';

export default {
    title: 'Pages/ProfilePage',
    component: ProfilePage,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => (
    <ProfilePage />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 35,
            country: Country.Belarus,
            lastname: 'Pimpkin',
            first: 'Vasyz',
            currency: Currency.EURO,
            city: 'Minsk',
            avatar: AvatarImage,
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 35,
            country: Country.Belarus,
            lastname: 'Pimpkin',
            first: 'Vasyz',
            currency: Currency.EURO,
            city: 'Minsk',
            avatar: AvatarImage,
        },
    },
})];
