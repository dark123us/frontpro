import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('Test input', () => {
    test('render input', () => {
        expect(true).toEqual(true);
        render(<Input />);
        expect(screen.getByTestId('input')).toBeInTheDocument();
    });
});
