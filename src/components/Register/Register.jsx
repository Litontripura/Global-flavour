import React, { useContext } from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
  const {createUser}= useContext(AuthContext)
          const handleRegister =(event)=>{
            event.preventDefault()
            const form = event.target;
            const name = form.name.value;
            const photo = form.photo.value;
            const email = form.email.value;
            const password = form.password.value;
            const confirmPassword = form.confirmPassword.value;
            console.log(name,photo, email, password, confirmPassword);
            createUser(email,password)
            .then(result=>{
              console.log(result);
            })
            .catch(error=>{
              console.log(error);
            })
            
          }
    return (
        <div className="flex justify-center items-center my-8">
        <form onSubmit={handleRegister} className="register-bg p-8 rounded-lg shadow-lg w-2/5 register">
          <h2 className="text-2xl font-medium mb-4">Register</h2>
          
            <div>
              <label htmlFor="Name" className="block text-gray-700 font-medium mb-2">Name</label>
              <input type="text" name='name' id="Name" className="border border-gray-400 p-2 w-full"  required />
            </div>
            <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input type="email" id="email" name='email' className="border border-gray-400 p-2 w-full"  required />
          </div>
            <div>
              <label htmlFor="photo" className="block text-gray-700 font-medium mb-2">Photo URL</label>
              <input  type="text" id="photo" name='photo' className="border border-gray-400 p-2 w-full"  required />
            </div>
            
          
       
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
            <input type="password" id="password" name='password' className="border border-gray-400 p-2 w-full"  required />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
            <input type="password" id="confirmPassword" name='confirmPassword' className="border border-gray-400 p-2 w-full"   required />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-green-500 hover:bg-green-200 text-white hover:text-black font-medium py-2 px-4 rounded">
              Register
            </button>
             <p>Already have an account? <Link to='/login'>Please Login</Link> </p>
          </div>
        </form>
      </div>
      
    );
};

export default Register;