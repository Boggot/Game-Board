import { render, screen } from '@testing-library/react';
import App from '../App';


test('renders welcome button', () => {
  render(<App />);
  const button = screen.getByRole('button', {name: 'Welcome'});
  expect(button).toBeInTheDocument();
});

test('displays Game-Board header', () => {
  render(<App />);
  const header = screen.getByRole('heading', {name: 'Game-Board'});
  expect(header).toBeInTheDocument();
})
