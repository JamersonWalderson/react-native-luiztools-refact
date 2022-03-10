import React from "react";
import { Text } from "react-native";
import Navigation from '../navigation/index';
import { InformationProvider } from '../context/InformationContext';
import { ProductProvider } from '../context/ProductContext';

const App = () => {
    return (
    <ProductProvider>
        <InformationProvider>
            <Navigation />
        </InformationProvider>
    </ProductProvider>
    );
}

export default App;