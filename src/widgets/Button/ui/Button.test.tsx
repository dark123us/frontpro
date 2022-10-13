import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Test button', () => {
    test('render button', () => {
        expect(true).toEqual(true);
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    test('render button with theme clear', () => {
        expect(true).toEqual(true);
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        // screen.debug();
    });
});
