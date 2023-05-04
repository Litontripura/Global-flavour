import React from 'react';

import { Link, useRouteError } from 'react-router-dom';


const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
        <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
       <img className='w-[400px] rounded-lg' src='https://plus.unsplash.com/premium_photo-1682310096066-20c267e20605?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=912&q=80' alt="" />
          <div className='max-w-md text-center'>
            <h2 className='mb-8 font-extrabold text-9xl text-orange-600'>
              <span className='sr-only'>Error</span> {status || 404}
            </h2>
            <p className='text-2xl font-semibold md:text-3xl mb-8 text-blue-500'>
              {error?.message}
            </p>
            <Link
              to='/'
              className='rounded-xl text-xl px-8 py-3 font-semibold grediantbutton text-green-600'
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
    );
};

export default ErrorPage;