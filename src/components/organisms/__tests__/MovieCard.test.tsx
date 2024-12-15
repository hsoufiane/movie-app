import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieCard from '../MovieCard';

// Mock the next/image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({objectFit, ...props}: any) => {
    return <img {...props} data-testid="movie-poster" />;
  },
}));

describe('MovieCard', () => {
  const mockMovie = {
    id: 1,
    title: 'Test Movie',
    posterUrl: '/test-poster.jpg',
    voteAverage: '8.5',
    releaseYear: '2023',
  };

  it('renders the movie card', () => {
    render(<MovieCard movie={mockMovie} />);
    expect(screen.getByText('Test Movie')).toBeInTheDocument();
    expect(screen.getByText('2023')).toBeInTheDocument();
    expect(screen.getByText('8.5')).toBeInTheDocument();
  });

  it('renders the movie poster', () => {
    render(<MovieCard movie={mockMovie} />);
    const poster = screen.getByAltText('Test Movie');
    expect(poster).toBeInTheDocument();
    expect(poster).toHaveAttribute('src', expect.stringContaining('/test-poster.jpg'));
  });

  it('does not render vote average when it is 0', () => {
    const movieWithNoVote = {...mockMovie, voteAverage: '0'};
    render(<MovieCard movie={movieWithNoVote} />);
    expect(screen.queryByText('0.0')).not.toBeInTheDocument();
  });
});
