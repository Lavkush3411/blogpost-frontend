import React, { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { LoginContext } from "./ContextProvider";

function ProtectedRoute() {
  const { isLoggedIn } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);
  return <Outlet />;
}

export default ProtectedRoute;
