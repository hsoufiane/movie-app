import React from 'react';
import {render, screen} from '@testing-library/react';
import BackButton from '../BackButton';

describe('BackButton', () => {
  it('renders with correct text and link', () => {
    render(<BackButton href="/test">Back to test</BackButton>);
    const link = screen.getByRole('link', {name: /Back to test/i});
    expect(link).toHaveAttribute('href', '/test');
  });

  it('includes back arrow symbol', () => {
    render(<BackButton href="/test">Back</BackButton>);
    expect(screen.getByText('←')).toBeInTheDocument();
  });
});
