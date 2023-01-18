import { render, screen } from '@testing-library/react';
import App from './App';

test("renders a link that points to a url", () => {
  render(<App />);
  const linkElement = screen.getByText("Our Restaurant");
  expect(linkElement),toBeInTheDocument();
});
