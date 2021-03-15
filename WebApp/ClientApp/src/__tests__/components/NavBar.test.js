import { render, screen } from '@testing-library/react';
import NavBar from '../../components/NavBar.js';

test('it displays AppBar', () => {
    render(<NavBar />);
});

test('it displays Game-Board inside navbar', () => {
    render(<NavBar />);
    const title = screen.getByRole('heading', {name:'Game-Board'});
    expect(title).toBeInTheDocument();
})

test('it shows github repo button', () => {
    render(<NavBar />);
    const github = screen.getByRole('button', {name: 'github repository'});
    expect(github).toBeInTheDocument();
})

test('github repo displays github icon', () => {
    render(<NavBar />);
    const githubIcon = screen.getByRole('button', {name: 'github icon'});
    expect(githubIcon).toBeInTheDocument();
})