import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Counter from './Counter';
describe('Counter Suit', () => {

    test("Initial counter should 0", () => {
        render(<Counter />)
        const counterZero = screen.getByTestId('counterValue');
        // expect(counterZero).toBeInTheDocument();
        expect(counterZero.textContent).toBe('0');
        // screen.debug()
    });

    test("when cliced on 5 time on increment it should be 5", () => {
        render(<Counter />)
        const counterZero = screen.getByTestId('counterValue');
        const incrementButton = screen.getByRole('button', { name: 'Increase', exact: false });

        fireEvent.click(incrementButton);
        fireEvent.click(incrementButton);
        fireEvent.click(incrementButton);
        fireEvent.click(incrementButton);
        fireEvent.click(incrementButton);
        // expect(counterZero).toBeInTheDocument();
        expect(counterZero.textContent).toBe('5');
        screen.debug()
    })

    test("when cliced on 5 time on Decrement it should be -5", () => {
        render(<Counter />)
        const counterZero = screen.getByTestId('counterValue');
        const decrementButton = screen.getByRole('button', { name: 'Descrease', exact: false });

        fireEvent.click(decrementButton);
        // fireEvent.click(decrementButton);
        // fireEvent.click(decrementButton);
        // fireEvent.click(decrementButton);
        // fireEvent.click(decrementButton);
        // expect(counterZero).toBeInTheDocument();
        expect(parseInt(counterZero.textContent)).toBe(-1);
        screen.debug()
    })
    test("if counter greater than 5. it color should be green", () => {
        render(<Counter />)
        const counterZero = screen.getByTestId('counterValue');
        const incrementButton = screen.getByRole('button', { name: 'Increase', exact: false });

        fireEvent.click(incrementButton);
        fireEvent.click(incrementButton);
        fireEvent.click(incrementButton);
        fireEvent.click(incrementButton);
        fireEvent.click(incrementButton);
        fireEvent.click(incrementButton);
        // expect(counterZero).toBeInTheDocument();
        expect(counterZero).toHaveClass('yellow');
        screen.debug()
    })
    test("if counter less than 0. it color should be red", () => {
        render(<Counter />)
        const counterZero = screen.getByTestId('counterValue');
        const decrementButton1 = screen.getByRole('button', { name: 'Descrease', exact: false });

        fireEvent.click(decrementButton1);
        // expect(counterZero).toBeInTheDocument();
        expect(counterZero).toHaveClass('red');
        screen.debug()
    })
})