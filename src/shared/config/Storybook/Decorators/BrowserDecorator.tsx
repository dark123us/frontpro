import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const BrowserDecorator = (StoryComponent: Story) => (
    <BrowserRouter>
        <StoryComponent />
    </BrowserRouter>
);
