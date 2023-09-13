import React from 'react';
import { render } from '@testing-library/react';
import { ResourcesBox } from './ResourceBox';
import { ClothesIcon } from '@icons';

describe('Resource Box', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ResourcesBox
        icon={<ClothesIcon />}
        title="Test"
        description="Test description"
        href="./"
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
