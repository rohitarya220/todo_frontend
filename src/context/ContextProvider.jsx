import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const StateContext = createContext();

const baseURL = "https://todo-backend-ht4t.onrender.com";
// const baseURL = 'http://localhost:8000'

export const ContextProvider = ({ children }) => {
  const [isLogIn, setIsLogIn] = useState(false);
  const token = localStorage.getItem("token");
  const tk = 'bearer ' + token;
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState([]);
  // console.log(tk);

  const handleLogin = (token) => {
    localStorage.setItem("token", token);
    setIsLogIn(true);
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setIsLogIn(false);
  };

  const RegisterUser = async (formData) => {
    try {
      const response = await axios.post(`${baseURL}/users/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success(response.message);
    } catch (error) {
      toast.error("Registration failed. Please try again.");
    }
  };

  const logIn = async (email, password) => {
    try {
      const response = await axios.post(
        `${baseURL}/users/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      navigate("/");
      handleLogin(data.token);
      toast.success(data.message);
    } catch (error) {
      setIsLogIn(false);
      toast.error("Login failed. Please try again.");
    }
  };

  const getTodos = async () => {
    try {
      const response = await axios.get(`${baseURL}/todos`, {
        headers: {
          "Content-Type": "application/json",
          token: tk,
        },
      });
      const data = response.data;
      setTodoList(data.data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const addTodo = async (title, description) => {
    try {
      const response = await axios.post(
        `${baseURL}/todos/create`,
        { 
          title,
          description,
         },
        {
          headers: {
            "Content-Type": "application/json",
            token: tk,
          },
        }
      );
      // const data = response?.data;
      toast.success('Todo successfully added');
      getTodos();
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      setIsLogIn(true);
    } else {
      setIsLogIn(false);
    }
  }, [token]);

  const value = {
    RegisterUser,
    isLogIn,
    logIn,
    navigate,
    handleLogOut,
    addTodo,
    todoList,
    getTodos,
  };

  return (
    // eslint-disable-next-line
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
