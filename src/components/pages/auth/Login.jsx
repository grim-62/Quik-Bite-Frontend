import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import axios from '../../../configs/axios';

function Login({ toggleData }) {
  const navigate = useNavigate();

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const [toggleForm, setToggleForm] = toggleData;

  const loginFormHandler = async () => {
    try {
      const responce = await axios.post(`/auth/sign-in`, { email, password });
      navigate('/home');
    } catch (error) {
      console.error(error.response);
      toast.error(error.response.data.message, {
        position: 'top-center',
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    loginFormHandler();
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="flex bg-white shadow-2xl rounded-lg overflow-hidden">
        {/* Form Section */}
        <div className="left w-96 bg-gray-200 shadow-black shadow-2xl h-auto p-8 flex flex-col justify-center">
          <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">
            Login to your account
          </h1>

          <div className="flex flex-col mb-5">
            <label htmlFor="username" className="mb-2 text-gray-700">
              Email
            </label>
            <input
              className="bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 p-3"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Enter your username"
            />
          </div>

          <div className="flex flex-col mb-5">
            <label htmlFor="password" className="mb-2 text-gray-700">
              Password
            </label>
            <input
              className="bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 p-3"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>

          <div className="flex justify-center mb-6">
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-600 transition-colors"
            >
              Login
            </button>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <button
                onClick={() => setToggleForm(true)}
                className="text-blue-500 hover:underline"
              >
                Signup for free!
              </button>
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="right w-96">
          <img
            src="https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-006.jpg"
            alt="Delicious food"
            className="object-cover h-full w-full rounded-r-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
