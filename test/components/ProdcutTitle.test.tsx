import React from 'react';
import render from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { ProductTitle } from '../../src/components/ProductTitle';
import { product_1 } from '../data/product';

describe('PoductTitle', () => {
  test('show the component correctly witht presonalized title', () => {
    const wrapper = render.create(<ProductTitle name="My title" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('show the component correctly with default title', () => {
    const wrapper = render.create(
      <ProductCard product={product_1}>
        {() => (
          <>
            <ProductTitle />
          </>
        )}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
