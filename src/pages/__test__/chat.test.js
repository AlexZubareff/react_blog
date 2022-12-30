import { render, screen } from "@testing-library/react";
import { Chat } from "../Chat";

describe('Chat', () => {

    it('render placeholder in input', () => {
        render(<Chat />);
        const plName = screen.getAllByPlaceholderText('Name');
        const plMessage = screen.getAllByPlaceholderText('Message');
        const button = screen.getAllByRole('button');

        expect(plName).toBeDefined();
        expect(plMessage).toBeDefined();
        expect(button).toBeDefined();
    });

    it('render button add message', () => {
        render(<Chat />);
        const addButton = screen.getAllByText('ADD MESSAGE');
        expect(addButton).toBeDefined();
    });

    it('matches snapshot', () => {
        const component = render(<Chat />);
        expect(component).toMatchSnapshot();
    });
}); 