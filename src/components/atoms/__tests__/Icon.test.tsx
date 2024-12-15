import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import Icon from '../Icon';
import {FaSearch} from 'react-icons/fa';

describe('Icon', () => {
  it('renders the icon', () => {
    const {container} = render(<Icon icon={FaSearch} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const {container} = render(<Icon icon={FaSearch} className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
