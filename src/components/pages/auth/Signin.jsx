import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import axios from '../../../configs/axios';

function Signin({ toggleData }) {
  const navigate = useNavigate();
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const SignupformHandler = async () => {
    let data = {
      name: name,
      email: email,
      password: password,
    };
    try {
      const responce = await axios.post('auth/sign-up', data);
      navigate('/home');
    } catch (err) {
      console.log(err.response.data.message);
      toast.error(err.response.data.message, {
        position: 'top-center',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    SignupformHandler();
  };

  const [toggleForm, setToggleForm] = toggleData;
  return (
    <div className="flex justify-center items-center min-h-screen w-[80vw]">
      <div className="flex bg-white shadow-2xl rounded-lg overflow-hidden">
        <div className="container w-96 h-auto p-8 flex flex-col justify-center">
          <h1 className="text-center text-2xl font-bold text-gray-800 mb-6">
            Create your account
          </h1>

          <div className="flex flex-col mb-5">
            <label htmlFor="email" className="mb-2 text-gray-700">
              Username
            </label>
            <input
              className="bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 p-3"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col mb-5">
            <label htmlFor="email" className="mb-2 text-gray-700">
              Email
            </label>
            <input
              className="bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 p-3"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder="Enter your email"
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
              Sign up
            </button>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <button
                onClick={() => setToggleForm(false)}
                className="text-blue-500 hover:underline"
              >
                have account.
              </button>
            </div>
            <a href="#" className="text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>
        </div>
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

export default Signin;
