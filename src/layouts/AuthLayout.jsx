import React from "react";
import { Outlet } from "react-router-dom";
import Login from "../components/auth/Login";

const AuthLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
