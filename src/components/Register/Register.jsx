import React, { useContext, useState } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FaBeer, FaGithub, FaGoogle } from 'react-icons/fa';

const Register = () => {
  const [photo, setPhoto]=useState('')
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const {createUser}= useContext(AuthContext)

  const handleRegister = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    setError('')
    
    console.log(name, photo, email, password, confirmPassword);
    if (password.length < 6) {
      setError('The password is less than 6 characters')
      return;
    }
    if (name && email && password && photo) {
      createUser(email, password)
        .then((result) => {
          console.log(result.user);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }
    return (
        <div className="flex justify-center items-center my-8">
       {photo && <img src={photo} alt="User" className="w-24 h-24 rounded-full mb-4" />}
      <form onSubmit={handleRegister} className="register-bg p-8 rounded-lg shadow-lg w-2/5 register">
        <h2 className="text-2xl font-medium mb-4">Register</h2>
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
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
            <input type="password" id="confirmPassword" name='confirmPassword' className="border border-gray-400 p-2 w-full"   required />
          </div>
          <div className="">
          <p>Already have an account? <Link to='/login'>Please Login</Link> </p>
            <button type="submit" className="bg-green-500 hover:bg-green-200 text-white hover:text-black font-medium py-2 px-4 rounded">
            Please Register
            </button>
            
           <div className='mx-auto'>
           <button className='flex justify-center items-center bg-green-500 hover:bg-green-200 text-white hover:text-black font-medium py-2 px-4 rounded my-2'>
              <FaGoogle></FaGoogle> <p className='ms-2'>Sign with google</p>
             </button>
           </div>
           <div>
           <button className='flex  items-center bg-green-500 hover:bg-green-200 text-white hover:text-black font-medium py-2 px-4 rounded'><FaGithub></FaGithub><p className='ms-2'> Sign Up with Github</p></button>
           </div>
          </div>
        </form>
      </div>
      
    );
};

export default Register;