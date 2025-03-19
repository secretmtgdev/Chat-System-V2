import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import IconWrapper from './IconWrapper';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';

const mockOnClick = jest.fn();
describe('Render IconWrapper', () => {
    test('Renders IconWrapper component', () => {
        render(<IconWrapper icon={faFaceSmile} onClickHandler={mockOnClick} />);
        const iconWrapper: HTMLTextAreaElement = screen.getByRole('button');
        expect(iconWrapper).toBeInTheDocument();
    });
});

describe('Clicking icon', () => {
    test('Click icon works', () => {
        render(<IconWrapper icon={faFaceSmile} onClickHandler={mockOnClick} />);
        const iconWrapper: HTMLTextAreaElement = screen.getByRole('button');
        fireEvent.click(iconWrapper);
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});