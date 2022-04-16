import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';

import { product2 } from '../data/products';

describe('<ProductImage /> Tests', () => {
  test('should render correctly with no image', () => {
    const wrapper = renderer.create(
      <ProductImage img="https://any-image.jpg" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should render correctly with image', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
