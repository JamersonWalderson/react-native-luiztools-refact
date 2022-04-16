/**
 * https://youtu.be/NhHr8oVSetQ?t=2629
 * https://firebase.google.com/docs/auth/web/password-auth?hl=pt-br#web-version-8_2
 */
import auth from '@react-native-firebase/auth';
import React, { createContext, Dispatch, SetStateAction, useState } from 'react';
import { Alert } from 'react-native';

interface AuthContextProps {
  signature: boolean;
  setSignature: Dispatch<SetStateAction<boolean>>;
  handleNewAccount(email: string, password: string): any;
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: any) => {
  const [signature, setSignature] = useState<boolean>(false);

  /**
   * Lida com a criação de contas
   * @param email
   * @param password 
   */
  const handleNewAccount = (email: string, password: string) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) =>{
        const user = userCredential.user;
        
      })
      .catch((error) => {
        return {
          errorCode: error.code,
          message: error.message
        }
      });
  }


  return (
    <AuthContext.Provider value={{ 
      signature,
      setSignature,
      handleNewAccount
    }}>
      { children }
    </AuthContext.Provider>
  );
}