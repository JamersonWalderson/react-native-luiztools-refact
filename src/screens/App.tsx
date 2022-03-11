import React from "react";
import { Text } from "react-native";
import Router from '../navigation';
import { InformationProvider } from '../context/InformationContext';
import { ProductProvider } from '../context/ProductContext';
import { AuthProvider } from "../context/AuthContext";

const App = () => {
    return (
    <AuthProvider>
      <ProductProvider>
        <InformationProvider>
          <Router />
        </InformationProvider>
      </ProductProvider>
    </AuthProvider>
    );
}

export default App;