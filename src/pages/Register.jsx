import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider';
import { Spin } from 'antd';

const Register = () => {
  const { RegisterUser, isLogIn, navigate, loading } = useStateContext();

  if (isLogIn) {
    return navigate('/');
  }

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
    RegisterUser(formData);
  };

  return (
    <div className='flex flex-col items-center min-h-screen bg-gray-100'>
      <div className='md:w-full max-w-md  mt-12'>
        <div className='bg-white shadow-md rounded-lg md:px-8 px-10  pt-6 pb-8 mb-4'>
          <h1 className='text-3xl font-bold text-center text-gray-900 mb-6'>Register</h1>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label htmlFor='username' className='block text-sm font-medium text-gray-700'>
                Enter Full Name :
              </label>
              <input
                type='text'
                id='username'
                name='username'
                value={formData.username}
                onChange={handleChange}
                className=' block w-full border-gray-300 rounded-md shadow-sm focus:border-red-700 focus:ring focus:ring-red-700 focus:ring-opacity-50 outline-none p-1  mt-3 pl-2 pr-9'
                required
              />
            </div>
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
               Enter Email :
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='outline-none p-1 mt-3 block w-full border-gray-300 rounded-md shadow-sm focus:border-red-700 focus:ring focus:ring-red-700 focus:ring-opacity-50 pl-2'
                required
              />
            </div>
            <div>
              <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
               Enter Password :
              </label>
              <input
                type='password'
                id='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                className='outline-none p-1 mt-3 block w-full border-gray-300 rounded-md shadow-sm focus:border-red-700 focus:ring focus:ring-red-700 focus:ring-opacity-50 pl-2'
                required
              />
            </div>
            <div>
              <button
                type='submit'
                className='w-full mt-5 bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 outline-none'
              >
                {loading ? <Spin size="small" /> : 'Register'}
              </button>
            </div>
          </form>
          <p className='mt-4 text-center text-sm text-gray-600'>
            Already have an account?{' '}
            <NavLink to="/login" className='text-red-700 font-medium hover:underline'>
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
