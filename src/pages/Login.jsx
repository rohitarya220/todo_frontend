import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

const Login = () => {
  const { logIn, isLogIn, navigate } = useStateContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (isLogIn) {
    return navigate('/')
  }

  const handleLogin = () => {
    logIn(email, password);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl mt-32">Login</h1>
      <div className="flex flex-col">
        <input
          type="email"
          placeholder="Email"
          className="border-2 border-red-300 mt-10 w-72 h-12 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="border-2 border-red-300 mt-10 w-72 h-12 rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div
          className="flex justify-center items-center mt-12 w-72 text-xl bg-red-700 text-white font-bold h-14 border-2 border-red-700"
        >
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
      <NavLink
        to="/register"
        className="m-8 text-xl font-medium cursor-pointer"
      >
        You don't have an account?{" "}
        <span className="text-red-600">Register</span>{" "}
      </NavLink>
    </div>
  );
};

export default Login;
