import React from 'react';
import {render, screen} from '@testing-library/react';
import TextWithCategories from '../TextWithCategories';

describe('TextWithCategories', () => {
  const categories = ['Action', 'Adventure', 'Sci-Fi'];

  it('renders all categories', () => {
    render(<TextWithCategories categories={categories} />);
    categories.forEach(category => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  it('applies custom className', () => {
    const {container} = render(
      <TextWithCategories categories={categories} className="custom-class" />,
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
