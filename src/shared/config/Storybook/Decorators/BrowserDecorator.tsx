import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const BrowserDecorator = (story: () => Story) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
);
