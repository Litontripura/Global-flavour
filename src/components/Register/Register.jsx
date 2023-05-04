import React, { useContext, useState } from 'react';
import './Register.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FaBeer, FaGithub, FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';
import { getAuth } from "firebase/auth";

const Register = () => {
  const navigate = useNavigate()
    const location = useLocation()
  const [photo, setPhoto]=useState('')
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const from = location.state?.from?.pathname || '/'

  const {createUser,googleSignIn,gitHubSignIn}= useContext(AuthContext)


  const handleRegister = (event) => {
    event.preventDefault();
  
    setError("");
  
    if (password.length < 6) {
      setError("The password must be at least 6 characters");
      return;
    }
  
    if (!email.trim() || !password.trim()) {
      setError("Please enter a valid email and password");
      return;
    }
  
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true })
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleGoogle =()=>{
    googleSignIn()
    .then(result=>{
      console.log(result);
    })
    .catch(error=>{
      setError(error.message);
    })
  }
  const handleGitHub=()=>{
    gitHubSignIn()
    .then(result=>{
      console.log(result);
      navigate(from, { replace: true })
      
    })
    .then(error=>{
      setError(error);
      navigate(from, { replace: true })
    })
  }
  
    return (
        <div className="flex justify-center items-center my-8">
       {photo && <img src={photo} alt="User" className="w-24 h-24 rounded-full mb-4" />}
      <form onSubmit={handleRegister} className="register-bg p-8 rounded-lg shadow-lg w-2/5 register">
        <p className='text-warning font-bold'>{error}</p>
        <h2 className="text-2xl font-medium mb-4">Enter Your Information</h2>
        <div>
          <label htmlFor="Name" className="block text-gray-700 font-medium mb-2">Name</label>
          <input type="text" name='name' onChange={(e) => setName(e.target.value)} id="Name" className="border border-gray-400 p-2 w-full" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
          <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} name='email' className="border border-gray-400 p-2 w-full" required />
        </div>
        <div>
          <label htmlFor="photo" className="block text-gray-700 font-medium mb-2">Photo URL</label>
          <input type="text" id="photo" onChange={(e) => setPhoto(e.target.value)} name='photo' className="border border-gray-400 p-2 w-full" required />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
          <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} name='password' className="border border-gray-400 p-2 w-full" required />
        </div>
     
          <div className="">
          <p>Already have an account? <Link to='/login'>Please Login</Link> </p>
            <button type="submit" className="w-1/2 mt-5 bg-green-500 hover:bg-green-200 text-white hover:text-black font-medium py-2 px-4 rounded">
            Please Register
            </button>
            <div className='border-b'></div>
            <div className='mx-auto'>
           <button onClick={handleGoogle} className='w-1/2 flex justify-center items-center bg-green-500 hover:bg-green-200 text-white hover:text-black font-medium py-2 px-4 rounded my-2 mx-auto'>
              <FaGoogle></FaGoogle> <p className='ms-2'>Sign with google</p>
             </button>
           </div>
           <div>
           <button onClick={handleGitHub} className='w-1/2 flex  items-center mx-auto bg-green-500 hover:bg-green-200 text-white hover:text-black font-medium py-2 px-4 rounded'><FaGithub></FaGithub><p className='ms-2'> Sign In with Github</p></button>
           </div>
          </div>
        </form>
             
    
      </div>
      
    );
};

export default Register;