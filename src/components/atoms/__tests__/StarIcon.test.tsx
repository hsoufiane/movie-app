import React from 'react';
import {render, screen} from '@testing-library/react';
import StarIcon from '../StarIcon';

describe('StarIcon', () => {
  it('renders rating without votes', () => {
    render(<StarIcon rating={8.4} />);
    expect(screen.getByText('8.4')).toBeInTheDocument();
    expect(screen.queryByText(/votes/)).not.toBeInTheDocument();
  });

  it('renders rating with votes', () => {
    render(<StarIcon rating={8.4} votes={18} />);
    expect(screen.getByText('8.4')).toBeInTheDocument();
    expect(screen.getByText('(18 votes)')).toBeInTheDocument();
  });
});
