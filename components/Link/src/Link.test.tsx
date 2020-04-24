import React from 'react';
import { render } from '@testing-library/react';
import Link from '.';

describe('Link', () => {
  test('It matches the snapshot', () => {
    const { container } = render(<Link />);
    expect(container).toMatchSnapshot();
  });  
});