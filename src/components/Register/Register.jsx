import React from 'react';

const Register = () => {
          const handleRegister =(event)=>{
            event.preventDefault()
            const form = event.target;
            const name = form.name.value;
            const photo = form.photo.value;
            const email = form.email.value;
            const password = form.password.value;
            const confirmPassword = form.confirmPassword.value;
            console.log(name,photo, email, password, confirmPassword);
            
          }
    return (
        <div className="flex justify-center items-center ">
        <form onSubmit={handleRegister} className="register-bg p-8 rounded-lg shadow-lg w-2/5">
          <h2 className="text-2xl font-medium mb-4">Register</h2>
          
            <div>
              <label htmlFor="Name" className="block text-gray-700 font-medium mb-2">Name</label>
              <input type="text" name='name' id="Name" className="border border-gray-400 p-2 w-full"  required />
            </div>
            <div>
              <label htmlFor="photo" className="block text-gray-700 font-medium mb-2">Photo URL</label>
              <input  type="text" id="photo" name='photo' className="border border-gray-400 p-2 w-full"  required />
            </div>
            
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input type="email" id="email" name='email' className="border border-gray-400 p-2 w-full"  required />
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
            <a href="#" className="text-white font-medium bg-green-500">Terms of Service</a>
          </div>
        </form>
      </div>
      
    );
};

export default Register;