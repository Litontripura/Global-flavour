import React from 'react';

const SecondBanner = () => {
    return (
        <div className="bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-4xl font-bold mb-3">Global Flavour</h1>
          <p className="text-gray-700 text-lg mb-4">
          Global Flavour is a web platform that aims to bring the world's diverse culinary traditions closer to your home kitchen. Our platform offers a wide range of recipes, cooking tips, and cultural insights from around the world, helping you explore new ingredients and techniques, and expand your cooking skills.

With Global Flavour, you can easily search and filter recipes by cuisine, ingredients, dietary restrictions, and more. You can also save your favorite recipes, create shopping lists, and share your creations with the community. Whether you are an experienced home cook or just starting out, Global Flavour is the perfect place to discover and share new flavors and experiences.
          </p>
          
        </div>
        <div className="md:w-1/2 h-[500px]">
          <img  src='https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80' alt="Global Flavour" className="w-full rounded" />
        </div>
      </div>
    </div>
    );
};

export default SecondBanner;