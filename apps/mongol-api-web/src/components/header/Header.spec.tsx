import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  it('1. Should render successfully', () => {
    const { baseElement } = render(<Header />);
    expect(baseElement).toBeTruthy();
  });

  it('2. Should render with props', () => {
    const { baseElement } = render(<Header colorMode="dark" />);
    expect(baseElement).toBeTruthy();
  });
});
