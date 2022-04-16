import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductTitle } from '../../src/components';

import { product1 } from '../data/products';

describe('<ProductTitle /> Tests', () => {
  test('should show the component correctly with the title personalized', () => {
    const wrapper = renderer.create(<ProductTitle title="Testing title" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should show the component with product title', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{({}) => <ProductTitle />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
