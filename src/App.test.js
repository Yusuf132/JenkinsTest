import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello, React + Jest!', () => {
  render(<App />);
  const headingElement = screen.getByText(/Hello, React \+ Jest!/i);
  expect(headingElement).toBeInTheDocument();
});
