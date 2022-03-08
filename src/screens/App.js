import React from "react";
import { Text } from "react-native";
import Navigation from '../navigation/index';
import { InformationProvider } from '../context/InformationContext';

const App = () => {
    return (
        <InformationProvider>
            <Navigation />
        </InformationProvider>
    );
}

export default App;