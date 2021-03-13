import { render, screen } from '@testing-library/react';
import App from '../App';


test('renders welcome button', () => {
  render(<App />);
  const button = screen.getByText('Welcome');
  expect(button).toBeInTheDocument();
});

test('displays Game-Board header', () => {
  render(<App />);
  const header = screen.getByText('Game-Board');
  expect(header).toBeInTheDocument();
})
