import React from "react";
import { Text } from "react-native";
import Router from '../navigation';
import { InformationProvider } from '../context/InformationContext';
import { ProductProvider } from '../context/ProductContext';

const App = () => {
    return (
      <ProductProvider>
        <InformationProvider>
          <Router />
        </InformationProvider>
      </ProductProvider>
    );
}

export default App;