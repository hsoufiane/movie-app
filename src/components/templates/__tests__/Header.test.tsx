import React from 'react';
import {render, screen} from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  it('renders the logo', () => {
    render(<Header />);
    const logo = screen.getByAltText('TMDB Logo');
    expect(logo).toBeInTheDocument();
  });
});
