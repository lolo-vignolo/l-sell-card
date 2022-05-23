import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../.';

const product_1 = {
  id: '1',
  img: './coffee-mug.png',
  name: 'Coffee Mug',
};

const App = () => {
  return (
    <ProductCard product={product_1} initialValues={{ state: 5, maxCount: 10 }}>
      {({
        handleReset,
        count,
        handleIncrease,
        isMaxCountReached,
        maxCount,
        product,
      }) => (
        <>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </>
      )}
    </ProductCard>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
