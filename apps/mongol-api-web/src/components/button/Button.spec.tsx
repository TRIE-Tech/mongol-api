import React from 'react';
import { render } from '@testing-library/react';

import { Button } from './Button';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button> hello</Button>);
    expect(baseElement).toBeTruthy();
  });
});
