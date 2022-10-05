import { Story } from '@storybook/react';
import 'app/styles/index.scss';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

export const ThemeDecorator = (theme: Theme) => (story: () => Story) => (
    <div className={`app ${theme}`}>
        {story()}
    </div>
);
