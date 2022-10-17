import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Test button', () => {
    test('render button', () => {
        expect(true).toEqual(true);
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    test('render button with theme clear', () => {
        expect(true).toEqual(true);
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        // screen.debug();
    });
});
