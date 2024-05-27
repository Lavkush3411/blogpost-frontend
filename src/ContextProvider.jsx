import React, { createContext, useState } from "react";

const LoginContext = createContext();

function ContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
}

export default ContextProvider;
export { LoginContext };
