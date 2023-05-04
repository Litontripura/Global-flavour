import React, { useContext, useState } from 'react';
import './Login.css'
import { AuthContext } from '../Provider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/chefs'
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {logIn,  gitHubSignIn, googleSignIn}= useContext(AuthContext)
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
      logIn(email, password)
      .then(result=>{
        console.log(result);
        navigate(from, { replace: true })
        form.reset()
      })
      .catch(error=>{
        console.log(error);
      })
      
    }
    const handleGoogle =()=>{
      googleSignIn()
      .then(result=>{
        console.log(result);
        navigate(from, { replace: true })
      })
      .then(error=>{
        console.log(error);
      })
    }
    const handleGitHub =()=>{
      gitHubSignIn()
      .then(result=>{
        console.log(result);
        navigate(from, { replace: true })
      })
      .then(error=>{
        console.log(error);
      })
    }
    return (
      <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="login-bg bg-slate-200 p-8 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2 xl:w-1/3" >
        <h2 className="text-2xl font-bold text-blue-600 mb-4 ">Plese Log In</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
          <input type="email" id="email" className="border text-black p-2 w-full" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
          <input type="password" id="password" className="border text-black  p-2 w-full" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="">
          <button type="submit"  className='w-full  flex  items-center justify-center bg-orange-500 hover:bg-orange-400 text-white hover:text-black font-medium py-2 px-4 rounded' >
            Log In
          </button>
          <button className=" font-medium ">New to Global Flavour? <Link to='/register' className='text-orange-600'>Please Register</Link></button>
        </div>
        <div className='mx-auto'>
         <button onClick={handleGoogle}  className='w-full  flex  items-center justify-center bg-orange-500 hover:bg-orange-400 mt-3 text-white  font-medium py-2 px-4 rounded'>
            <FaGoogle></FaGoogle> <p className='ms-2'>Sign with google</p>
           </button>
         </div>
         <div>
           <button onClick={handleGitHub}  className='w-full  flex  items-center justify-center bg-orange-500 hover:bg-orange-400 mt-3 text-white  font-medium py-2 px-4 rounded'><FaGithub></FaGithub><p className='ms-2'> Sign In with Github</p></button>
           </div>
        </form>
      </div>
    );
};

export default Login;