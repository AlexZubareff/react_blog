import { render, fireEvent, screen } from "@testing-library/react";
import { ChatList } from "../ChatList";

describe('chatList form', () => {
    it('calls onSubmit when btn clicked', () => {
        const mockSubmit = jest.fn();
        render(<ChatList />);
        const button = screen.getByRole('button');
        fireEvent(button, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        })
        );
        expect(button).toBeDefined();
        expect(mockSubmit).toHaveBeenCalledTimes(1);

    });
});