import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchInput from '../SearchInput';

describe('SearchInput', () => {
  const mockOnChange = jest.fn();
  const mockOnClear = jest.fn();

  it('renders the search input', () => {
    render(<SearchInput value="" onChange={mockOnChange} onClear={mockOnClear} />);
    expect(screen.getByPlaceholderText('Rechercher des films ou séries...')).toBeInTheDocument();
  });

  it('calls onChange when input value changes', () => {
    render(<SearchInput value="" onChange={mockOnChange} onClear={mockOnClear} />);
    const input = screen.getByPlaceholderText('Rechercher des films ou séries...');
    fireEvent.change(input, {target: {value: 'test'}});
    expect(mockOnChange).toHaveBeenCalledWith('test');
  });

  it('shows clear button when value is not empty', () => {
    render(<SearchInput value="test" onChange={mockOnChange} onClear={mockOnClear} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls onClear when clear button is clicked', () => {
    render(<SearchInput value="test" onChange={mockOnChange} onClear={mockOnClear} />);
    const clearButton = screen.getByRole('button');
    fireEvent.click(clearButton);
    expect(mockOnClear).toHaveBeenCalled();
  });
});
