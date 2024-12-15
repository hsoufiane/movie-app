import React from 'react';
import {render} from '@testing-library/react';
import CardImage from '../CardImage';

describe('CardImage', () => {
  it('renders with portrait aspect ratio by default', () => {
    const {container} = render(<CardImage src="/test.jpg" alt="Test image" />);
    expect(container.firstChild).toHaveClass('aspect-[2/3]');
  });

  it('renders with landscape aspect ratio when specified', () => {
    const {container} = render(
      <CardImage src="/test.jpg" alt="Test image" aspectRatio="landscape" />,
    );
    expect(container.firstChild).toHaveClass('aspect-[16/9]');
  });

  it('applies custom className', () => {
    const {container} = render(
      <CardImage src="/test.jpg" alt="Test image" className="custom-class" />,
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
