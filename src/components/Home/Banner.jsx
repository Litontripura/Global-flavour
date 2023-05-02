import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-center md:h-70'>
            <img className='rounded h-1/4 w-full' src={`https://images.unsplash.com/photo-1598515213345-d710d121c709?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`} alt="" />
        </div>
    );
};

export default Banner;