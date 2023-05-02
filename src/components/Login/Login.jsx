import React, { useContext, useState } from 'react';
import './Login.css'
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {logIn}= useContext(AuthContext)
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
      logIn(email, password)
      .then(result=>{
        console.log(result);
      })
      .catch(error=>{
        console.log(error);
      })
      
    }
    return (
        <div className=" flex justify-center  items-center h-screen ">
        <form onSubmit={handleSubmit} className="login-bg p-8 rounded-lg shadow-lg w-2/5" >
          <h2 className="text-2xl font-medium mb-4">Log In</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input type="email" id="email" className="border text-black p-2 w-full" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
            <input type="password" id="password" className="border text-black bg-green-700 p-2 w-full" value={password} onChange={(e) => setPassword(e.target.value)} required />
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