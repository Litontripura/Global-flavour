import React, { useState } from 'react';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // TODO: Implement login logic
    }
    return (
        <div className=" flex justify-center  items-center h-screen ">
        <form onSubmit={handleSubmit} className="login-bg p-8 rounded-lg shadow-lg w-2/5" >
          <h2 className="text-2xl font-medium mb-4">Log In</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input type="email" id="email" className="border border-gray-400 p-2 w-full" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
            <input type="password" id="password" className="border border-gray-400 p-2 w-full" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-orange-500 hover:bg-orange-200  text-white hover:text-black font-medium py-2 px-4 rounded">
              Log In
            </button>
            <a  className="text-white font-medium bg-orange-500">Forgot Password?</a>
          </div>
        </form>
      </div>
    );
};

export default Login;