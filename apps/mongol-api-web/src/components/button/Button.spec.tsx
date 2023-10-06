import React from 'react';
import { render } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  it('1. Should render successfully', () => {
    const { baseElement } = render(<Button>hello</Button>);
    expect(baseElement).toBeTruthy();
  });

  it('2. Should render with props', () => {
    const { baseElement } = render(<Button>Small Button</Button>);
    expect(baseElement).toBeTruthy();
  });
});
