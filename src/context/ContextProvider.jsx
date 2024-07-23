import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const StateContext = createContext();

const baseURL = 'https://todo-backend-ht4t.onrender.com'
// const baseURL = 'http://localhost:8000'


export const ContextProvider = ({ children }) => {
  const [isLogIn, setIsLogIn] = useState(false)
  const token = 'bearer ' + localStorage.getItem('token')
  // const navigate = useNavigate()
  console.log(token)

  const handleLogin = (token) => {
    localStorage.setItem('token', token);
    setIsLogIn(true);
  };

  const RegisterUser = async (formData) => {
    try {
      const response = await axios.post(`${baseURL}/users/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      toast.error('Registration failed. Please try again.'); 
    }
  };

  const logIn = async (email, password) => {
    try {
      const response = await axios.post(`${baseURL}/users/login`, {
        email,
        password
      }, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = response.data;
        handleLogin(data.token, data.message);
        toast.success(data.message)
        setIsLogIn(true);
     
    } catch (error) {
      setIsLogIn(false);
      toast.error('Registration failed. Please try again.');
    }
  };




  const value = {
    RegisterUser,
    isLogIn,
    logIn
  };

  return (
    // eslint-disable-next-line 
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
}


export const useStateContext = () => useContext(StateContext);
