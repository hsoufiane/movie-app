import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from '../Input';

describe('Input', () => {
  it('renders the input', () => {
    render(<Input placeholder="Test placeholder" />);
    expect(screen.getByPlaceholderText('Test placeholder')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Input className="custom-class" />);
    expect(screen.getByRole('textbox')).toHaveClass('custom-class');
  });
});
