import React from "react";

const Blog = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 mb-20">
      <h2 className="text-3xl md:text-5xl text-black font-bold mb-5 text-center">
        Blog
      </h2>
      <div className="flex flex-col md:flex-row justify-around w-full">
        <div className="max-w-md mx-auto md:mx-0 md:max-w-sm mb-10 md:mb-0">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-gray-200 text-center px-4 py-2">
              <h3 className="text-lg font-medium text-gray-700">
                Uncontrolled vs Controlled Components
              </h3>
            </div>
            <div className="p-4">
              <p className="text-gray-700 text-base">
                In React, forms can either be controlled or uncontrolled.
                Controlled components are those where the form data is handled
                by a React component, whereas uncontrolled components allow the
                form data to be handled by the DOM itself.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-md mx-auto md:mx-0 md:max-w-sm mb-10 md:mb-0">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gray-200 text-center px-4 py-2">
            <h3 className="text-lg font-medium text-gray-700">
              React PropTypes
            </h3>
          </div>
          <div className="p-4">
            <p className="text-gray-700 text-base">
              PropTypes is a library used to validate React props. It allows you
              to specify the data types of the props and ensures that they are
              passed correctly to the component. This helps to reduce errors and
              improve the code's maintainability and readability.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-md mx-auto md:mx-0 md:max-w-sm mb-10 md:mb-0">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gray-200 text-center px-4 py-2">
            <h3 className="text-lg font-medium text-gray-700">
              Node.js vs Express.js
            </h3>
          </div>
          <div className="p-4">
            <p className="text-gray-700 text-base">
              Node.js is a JavaScript runtime built on the Chrome V8 engine that
              allows developers to run JavaScript code outside of the browser.
              Express.js is a web application framework that runs on top of
              Node.js and provides a simple, flexible, and scalable way to build
              web applications and APIs.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-md mx-auto md:mx-0 md:max-w-sm mb-10 md:mb-0">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gray-200 text-center px-4 py-2">
            <h3 className="text-lg font-medium text-gray-700">
              What is custom hook and why why will you create custom hook?
            </h3>
          </div>
          <div className="p-4">
            <p className="text-gray-700 text-base">
           A custom hook is a JavaScript function that uses one or more of the built in React Hooks to encapsulate a piece of reusable logic in a modular and composable way. By defining a custom hook, you can abstract away complex logic and state management from your components and reuse that logic across multiple components.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
