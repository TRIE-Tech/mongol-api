import React from 'react';
import { render } from '@testing-library/react';

import { Footer } from './Footer';

describe('Footer', () => {
  it('1. Should render successfully', () => {
    const { baseElement } = render(<Footer />);
    expect(baseElement).toBeTruthy();
  });

  it('2. Should render with props', () => {
    const { baseElement } = render(<Footer backgroundColor="dark" />);
    expect(baseElement).toBeTruthy();
  });
});
