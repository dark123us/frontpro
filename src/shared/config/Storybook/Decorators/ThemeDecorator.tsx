import { Story } from '@storybook/react';
import 'app/styles/index.scss';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
