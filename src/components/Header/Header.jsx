import React, { useContext } from "react";
import ActiveLink from "../ActiveLink/ActiveLink";
import { Link } from "react-router-dom";
import './Header.css'
import { AuthContext } from "../Provider/AuthProvider";


const Header = () => {
  const {user, LogOut}= useContext(AuthContext)
  const handleLogOut =()=>{
      LogOut()
      .then(()=>{
        
      })
      .catch(error=>{
        console.log(error);
      })
  }
  return (
    <div className="nav bg-base-300  md:grid grid-cols-4 items-center">
         <Link>
          <span className="text-orange-500 text-5xl font-extrabold">G</span>
          <span className="text-blue-500 text-5xl font-extrabold ">F</span>
         </Link>
       <div className="col-span-2 mx-auto">
       <div className="logo flex items-center shadow-xl">
              <span className="text-4xl font-bold text-orange-500">G</span>
              <span className="font-bold text-xl text-blue-700">lobal</span>{" "}
              <span className="text-4xl font-bold text-orange-500 ms-1">F</span>
              <span className="font-bold text-xl text-blue-700">lavour</span>
      </div>
       </div>
      <div className="col-span-1">
        <ul className="md:flex items-center gap-5 font-bold">
          <li>
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li>
           
            <ActiveLink to="/blog">Blog</ActiveLink>
          </li>
         
          <li>
           
            {
              user ? <span onClick={handleLogOut}><ActiveLink>Log out</ActiveLink></span>:<ActiveLink to="/login">Login</ActiveLink>
            }
          </li>
          <li>
            <ActiveLink to="/register">register</ActiveLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
