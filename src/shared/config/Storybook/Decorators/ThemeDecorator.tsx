import { Story } from '@storybook/react';
import 'app/styles/index.scss';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (story: () => Story) => (
    <ThemeProvider>
        <div className={`app ${theme}`}>
            {story()}
        </div>
    </ThemeProvider>
);
