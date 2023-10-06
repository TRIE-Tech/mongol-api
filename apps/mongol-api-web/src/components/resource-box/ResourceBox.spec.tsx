import React from 'react';
import { render } from '@testing-library/react';
import { ResourcesBox } from './ResourceBox';

describe('Resource Box', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ResourcesBox title="Test" href="./" codeSnippet="" />
    );
    expect(baseElement).toBeTruthy();
  });
});
