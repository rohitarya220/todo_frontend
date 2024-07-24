import React from "react";
import { Outlet } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";
import Login from "../pages/Login";

function ProtectedRoute() {
  const { isLogIn, loading, navigate } = useStateContext();
  console.log(isLogIn)
  // if(isLogIn) {
  //   return navigate("/login");
  // }

  if (loading === true) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  if (!isLogIn) {
    navigate("/login");
    return <Login />;
  }

  return <Outlet />;
}

export default ProtectedRoute;