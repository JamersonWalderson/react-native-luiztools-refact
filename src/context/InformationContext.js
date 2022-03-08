import React, { createContext } from 'react';

export const InformationContext = createContext([]);

export const InformationProvider = ({ children }) => {
    const developer = {
        name: 'Jamerson Walderson',
        github: 'https://github.com/JamersonWalderson'
    };

    return (
        <InformationContext.Provider value={{developer}}>
            { children }
        </InformationContext.Provider>
    );
}