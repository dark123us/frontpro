import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/Storybook/Decorators/ThemeDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import AvatarImage from 'shared/assets/test/avatar.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'Entities/ProfileCard',
    component: ProfileCard,
    argTypes: {},
    args: {
        data: {
            username: 'admin',
            age: 35,
            country: Country.Belarus,
            lastname: 'Pimpkin',
            first: 'Vasya',
            currency: Currency.EURO,
            city: 'Minsk',
            avatar: AvatarImage,
        },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args, context) => (
    <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {

};

export const IsLoading = Template.bind({});
IsLoading.args = {
    isLoading: true,
};

export const WithError = Template.bind({});
WithError.args = {
    error: 'error',
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
