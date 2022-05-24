import React from 'react';
import render from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { ProductImage } from '../../src/components/ProductImage';
import { product_1 } from '../data/product';

describe('PoductTitle', () => {
  test('show the component correctly witht img', () => {
    const wrapper = render.create(<ProductImage img="./coffee-mug.png" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('show the component correctly with default img', () => {
    const wrapper = render.create(
      <ProductCard product={product_1}>
        {() => (
          <>
            <ProductImage />
          </>
        )}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
