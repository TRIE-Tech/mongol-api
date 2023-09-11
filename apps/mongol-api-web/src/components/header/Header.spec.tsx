import React from 'react';
import { render } from '@testing-library/react';

import { Header } from './Header';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Header />);
    expect(baseElement).toBeTruthy();
  });
});
