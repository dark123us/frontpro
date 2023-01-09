import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/Storybook/Decorators/ThemeDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import AvatarImage from '@/shared/assets/test/avatar.jpg';
import { ProfileCard } from './ProfileCard';
import { Theme } from '@/shared/const/theme';

const data = {
    username: 'admin',
    age: 35,
    country: Country.Belarus,
    lastname: 'Pimpkin',
    first: 'Vasya',
    currency: Currency.EURO,
    city: 'Minsk',
    avatar: AvatarImage,
};

export default {
    title: 'Entities/ProfileCard',
    component: ProfileCard,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = { data };

export const IsLoading = Template.bind({});
IsLoading.args = {
    data,
    isLoading: true,
};

export const WithError = Template.bind({});
WithError.args = {
    data,
    error: 'error',
};

export const Dark = Template.bind({});
Dark.args = { data };
Dark.decorators = [ThemeDecorator(Theme.DARK)];
