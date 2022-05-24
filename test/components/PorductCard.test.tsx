import React from 'react';
import render from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { product_1 } from '../data/product';

const { act } = render;

describe('PoductTitle', () => {
  test('children se renderiza correctamente', () => {
    const wrapper = render.create(
      <ProductCard product={product_1}>
        {() => (
          <>
            <h1>gola mundo</h1>
          </>
        )}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe incremenat el contador', () => {
    const wrapper = render.create(
      <ProductCard product={product_1}>
        {({ handleIncrease, count }) => (
          <>
            <h1>Product card</h1>
            <span>{count}</span>
            <button onClick={() => handleIncrease(1)}>incrementar</button>
          </>
        )}
      </ProductCard>
    );

    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();

    act(() => {
      (tree as any).children[2].props.onClick();
    });
    tree = wrapper.toJSON();

    expect((tree as any).children[1].children[0]).toBe('1');
  });
});
