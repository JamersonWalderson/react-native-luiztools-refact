import React, { createContext, ReactNode } from 'react';

interface InformationContext {
    developerInformation: developer;
}

interface developer {
    name: string;
    github: string;
}

export const InformationContext = createContext({} as InformationContext);

export const InformationProvider = ({ children }: any) => {
    const developerInformation: developer = {
        name: 'Jamerson Walderson',
        github: 'https://github.com/JamersonWalderson'
    };

    return (
        <InformationContext.Provider value={{developerInformation}}>
            { children }
        </InformationContext.Provider>
    );
}