import React, { createContext, useState } from "react";

export const ContextAuth = createContext();
const AuthContext = ({ children }) => {
  const [user, setUser] = useState();

  return (
    <ContextAuth.Provider value={{ user, setUser }}>
      {children}
    </ContextAuth.Provider>
  );
};

export default AuthContext;
