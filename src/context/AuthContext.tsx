import React, { createContext, Dispatch, SetStateAction, useState } from 'react';

interface AuthContextProps {
  signature: boolean;
  setSignature: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: any) => {
  const [signature, setSignature] = useState<boolean>(false);


  return (
    <AuthContext.Provider value={{ 
      signature,
      setSignature
    }}>
      { children }
    </AuthContext.Provider>
  );
}