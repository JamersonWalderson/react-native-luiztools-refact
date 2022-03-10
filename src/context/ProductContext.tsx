import React, { createContext, useState } from 'react';

interface ProductContextInterface {
  product: Array<any>;
  setProduct(item: any): void;
}

interface ProductModel {
  quantity: string,
  descrition: string,
}

export const ProductContext = createContext({} as ProductContextInterface)

export const ProductProvider = ({ children }: any) => {
  // const [product, setProduct] = useState<ProductModel>({ quantity: '', descrition: '' });
  const [product, setProduct] = useState([]);
  console.log(product);
  
  return (
    <ProductContext.Provider 
      value={{
        product,
        setProduct
      }}>
      { children }
    </ProductContext.Provider>
  );
}