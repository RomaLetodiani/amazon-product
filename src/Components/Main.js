import React, { useState } from 'react';
import ProductReview from './ProductReview';
import { useData } from '../Contexts/dataContext';
import ProductPreview from './ProductPreview';

const Main = () => {
  const ProductData = useData();
  const [count, setCount] = useState(0);

  const [btnCount, setBtnCount] = useState(0);
  return (
    <main className="flex flex-grow px-[10vw] justify-center items-center flex-col lg:flex-row">
      <ProductPreview
        btnCount={btnCount}
        image={ProductData.colorOptions[count].imageUrl}
      />
      <ProductReview
        count={count}
        setCount={setCount}
        btnCount={btnCount}
        setBtnCount={setBtnCount}
        colorOpt={ProductData.colorOptions}
        ftList={ProductData.featureList}
        title={ProductData.title}
        desc={ProductData.description}
      />
    </main>
  );
};

export default Main;
