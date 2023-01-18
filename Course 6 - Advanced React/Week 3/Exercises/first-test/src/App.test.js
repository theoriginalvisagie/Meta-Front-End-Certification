import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import FeedbackForm from './FeedbackForm';

describe("Feedback Form", () => {
  test('Submission is disabled if comment empty and score below 5', () => {
    
    // Mock Function
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    const rangeInput = screen.getByLabelText(/Score:/);
    fireEvent.change(rangeInput, {target: {value: "4"}});

    const Submitted = screen.getByRole(/button:/);
    fireEvent.click(submitButton);

    expect(handleSubmit).not.toHaveBeenCalled();
    expect(submitButton).toHaveAttribute("disabled");
  });
});
  
