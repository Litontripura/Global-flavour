import React from 'react';
import './thirdBanner.css'



const ThirdBanner = () => {
    return (
        <div
          className="bg-cover bg-center mb-6 pb-5 h-[90vh] third-banner"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1470784790053-6c2f15489967?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80')` }}
        >
          <div className="h-full flex flex-col justify-center items-center">
            <h2 className="text-4xl md:text-6xl text-black font-bold text-center">
              Discover the world's flavors with Global Flavour
            </h2>
            <p className="text-lg md:text-xl text-orange-500 font-medium text-center mt-5">
              Our mission is to bring the best and unique flavors from all around the world to your doorstep.
            </p>
          </div>
        </div>
    );
};

export default ThirdBanner;
