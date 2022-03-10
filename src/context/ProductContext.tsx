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
  const [product, setProduct] = useState([]);
  
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