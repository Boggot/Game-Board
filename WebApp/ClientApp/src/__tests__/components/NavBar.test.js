import { render } from '@testing-library/react';
import NavBar from '../../components/NavBar.js';

test('it displays AppBar', () => {
    render(<NavBar />);
});