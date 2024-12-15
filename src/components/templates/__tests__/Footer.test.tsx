import React from 'react';
import {render, screen} from '@testing-library/react';
import Footer from '../Footer';
import {footerContent} from '../constants/footerContent';

// Mock the next/link component
jest.mock('next/link', () => {
  return ({children}: {children: React.ReactNode}) => children;
});

describe('Footer', () => {
  it('renders the about section', () => {
    render(<Footer />);
    expect(screen.getByText(footerContent.about.title)).toBeInTheDocument();
    expect(screen.getByText(footerContent.about.description)).toBeInTheDocument();
  });

  it('renders quick links', () => {
    render(<Footer />);
    expect(screen.getByText(footerContent.quickLinks.title)).toBeInTheDocument();
    footerContent.quickLinks.links.forEach(link => {
      expect(screen.getByText(link.name)).toBeInTheDocument();
    });
  });

  it('renders legal links', () => {
    render(<Footer />);
    expect(screen.getByText(footerContent.legal.title)).toBeInTheDocument();
    footerContent.legal.links.forEach(link => {
      expect(screen.getByText(link.name)).toBeInTheDocument();
    });
  });

  it('renders copyright notice', () => {
    render(<Footer />);
    expect(screen.getByText(footerContent.copyright)).toBeInTheDocument();
  });
});
