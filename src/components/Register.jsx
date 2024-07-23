import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';

const Login = () => {
  const { RegisterUser } = useStateContext();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const formDataString = JSON.stringify(formData);
    RegisterUser(formData);
  };

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-5xl mt-32'>Register</h1>
      <form onSubmit={handleSubmit} className='flex flex-col'>
        <input
          type='text'
          name='username'
          placeholder='Name'
          value={formData.username}
          onChange={handleChange}
          className='border-2 border-red-300 mt-10 w-72 h-12 rounded-md'
        />
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          className='border-2 border-red-300 mt-10 w-72 h-12 rounded-md'
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={formData.password}
          onChange={handleChange}
          className='border-2 border-red-300 mt-10 w-72 h-12 rounded-md'
        />
        <button
          type='submit'
          className='flex justify-center items-center mt-12 w-72 text-xl bg-red-700 text-white font-bold h-14 border-2 border-red-700'
        >
          Register
        </button>
      </form>
      <NavLink to="/" className='m-8 text-xl font-medium cursor-pointer'>
        u have account? <span className='text-red-600'> Login</span>
      </NavLink>
    </div>
  );
};

export default Login;
