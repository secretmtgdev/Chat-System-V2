import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import MessageInput from './MessageInput';

const mockOnSend = jest.fn();

describe('Render MessageInput', () => {
    test('Renders text area component', () => {
        render(<MessageInput onClickHandler={mockOnSend} />);
        const messageText: HTMLTextAreaElement = screen.getByRole('textbox');
        expect(messageText).toBeInTheDocument();
    });
});

describe('Test MessageInput functionality', () => {
    describe('TextArea tests', () => {
        test('Updates the input field as a user types', () => {
            render(<MessageInput onClickHandler={mockOnSend}  />);
            const expectedMessage = 'Thanks for tagging along';
            const messageText: HTMLTextAreaElement = screen.getByRole('textbox');
            fireEvent.change(messageText, {
                target: {
                    value: expectedMessage
                }
            });
        
            expect(messageText.value).toBe(expectedMessage);
        });
    });

    describe('Send button tests', () => {
        beforeEach(() => {
            mockOnSend.mockClear();
        });

        test('Clears the input field after sending message', async () => {
            render(<MessageInput onClickHandler={mockOnSend} />);
            const messageText: HTMLTextAreaElement = screen.getByRole('textbox');
            const sendButton: HTMLButtonElement = screen.getByRole('button', {
                name: /send message/i
            });

            fireEvent.change(messageText, {
                target: {
                    value: 'Thanks for tagging along'
                }
            });
            
            fireEvent.click(sendButton);
            expect(mockOnSend).toHaveBeenCalledTimes(1);
            await waitFor(() => expect(messageText).toHaveValue(''));
        });
    });
});