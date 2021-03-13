import { render, screen } from '@testing-library/react';
import NavBar from '../../components/NavBar.js';

test('it displays AppBar', () => {
    render(<NavBar />);
});

test('it displays Game-Board inside navbar', () => {
    render(<NavBar />);
    const title = screen.getByText('Game-Board');
    expect(title).toBeInTheDocument();
})