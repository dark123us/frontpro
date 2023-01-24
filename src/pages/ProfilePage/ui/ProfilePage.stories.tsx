import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/Storybook/Decorators/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/Storybook/Decorators/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
// import AvatarImage from '@/shared/assets/test/avatar.jpg';
import ProfilePage from './ProfilePage';
import { Theme } from '@/shared/const/theme';

const form = {
    username: 'admin',
    age: 35,
    country: Country.Belarus,
    lastname: 'Pimpkin',
    first: 'Vasyz',
    currency: Currency.EURO,
    city: 'Minsk',
    avatar: 'https://cs10.pikabu.ru/images/community/2064/1605883416236930302.png',
};

export default {
    title: 'Pages/ProfilePage',
    component: ProfilePage,
    argTypes: {},
    args: {},
    decorators: [StoreDecorator({ profile: { form } })],
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
    <ProfilePage {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
