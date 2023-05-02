import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="nav bg-base-300 py-5 md:grid grid-cols-4 items-center  ">
         <div className="col-span-1">
          <span className="text-orange-500 text-5xl font-extrabold">G</span>
          <span className="text-blue-500 text-5xl font-extrabold ">F</span>
         </div>
       <div className="col-span-2 mx-auto">
       <Link className="flex items-center ">
              <span className="text-4xl font-bold text-orange-500">G</span>
              <p className="font-bold text-xl text-blue-700">lobal</p>{" "}
              <span className="text-4xl font-bold text-orange-500 ms-1">F</span>
              <p className="font-bold text-xl text-blue-700">lavour</p>
            </Link>
       </div>
      <div className="col-span-1">
        <ul className="md:flex items-center gap-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/blog">Blog</Link>
          </li>
         
          <li>
            {" "}
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">register</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
