import React, { useContext } from "react";
import { AuthContext } from './../context/AuthContext';
import SignedRoutes from "./signed.routes";
import UnsignedRoutes from "./unsigned.routes";


export default function Router() {
  const { signature } = useContext(AuthContext);

  return (
    signature ? <UnsignedRoutes />: <SignedRoutes />
  );
}