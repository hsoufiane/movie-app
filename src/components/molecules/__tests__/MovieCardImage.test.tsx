import React from 'react';
import {render, screen} from '@testing-library/react';
import MovieCardImage from '../MovieCardImage';

describe('MovieCardImage', () => {
  it('renders without rating', () => {
    render(<MovieCardImage src="/test-poster.jpg" alt="Test movie" />);
    expect(screen.getByAltText('Test movie')).toBeInTheDocument();
    expect(screen.queryByText(/votes/)).not.toBeInTheDocument();
  });

  it('renders with rating and votes', () => {
    render(<MovieCardImage src="/test-poster.jpg" alt="Test movie" rating={8.4} votes={18} />);
    expect(screen.getByAltText('Test movie')).toBeInTheDocument();
    expect(screen.getByText('8.4')).toBeInTheDocument();
    expect(screen.getByText('(18 votes)')).toBeInTheDocument();
  });
});
